# Nginx 配置


## Nginx反向代理-负载均衡
## 配置块

```nginx
user root;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
## 日志格式设定
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    ## 访问日志位置
    access_log  /var/log/nginx/access.log  main;
    ## 支持文件发送(下载)
    sendfile            on;
    ##此选项允许或禁止使用socke的TCP_CORK的选项（发送数据包前先缓存数据），此选项仅在使用sendfile的时候使用
    tcp_nopush          on;
    tcp_nodelay         on;
    
    ##连接保持超时时间，单位是秒
    keepalive_timeout   65;
    types_hash_max_size 4096;
    
    ## 文件扩展名与文件类型映射表
    include             /etc/nginx/mime.types;
    ## 默认文件类型
    default_type        application/octet-stream;
    
    
    server {
        listen 80;
	server_name treenode.cn;
	rewrite ^(.*)$ https://${server_name}$1 permanent;
    }
     server {
        listen       443;
        listen       [::]:444;
        server_name  treenode.cn;
        root         /root/server/center_vuet/;

        ##网页的默认字符集
        charset utf-8;

        ssl on;
	ssl_certificate /etc/nginx/cert/scs1679319679921_www.treenode.cn_server.crt;
	ssl_certificate_key /etc/nginx/cert/scs1679319679921_www.treenode.cn_server.key;
	ssl_session_timeout 10m;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
	ssl_prefer_server_ciphers on;
        # Load configuration files for the default server block.
        # include /etc/nginx/default.d/*.conf;
        location / {
            proxy_pass http://127.0.0.1:15173;

        }
        location /myblog {
            alias  /root/server/myblog/docs/.vuepress/dist/;
            index  index.html index.htm; # 入口文件
            
            
        }
        
        location /api/ {
	   proxy_pass http://127.0.0.1:15001/;
	}

        error_page 404 /404.html;
        location = /40x.html {
        }
        
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
}
```

## 动静分离
```
~代表匹配时区分大小写
.*代表任意字符都可以出现零次或多次，即资源名不限制
\.代表匹配后缀分隔符.
(html|...|css)代表匹配括号里所有静态资源类型

location ~ .*\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css){  
	
    # 最后面的值在上线前可配置为允许的域名地址  
    valid_referers blocked 192.168.12.129;  
    if ($invalid_referer) {  
        # 可以配置成返回一张禁止盗取的图片  
        # rewrite   ^/ http://xx.xx.com/NO.jpg;  
        # 也可直接返回403  
        return   403;  
    }  
    root   /soft/nginx/static_resources;  
    expires 7d;  
}
```

## 资源压缩

最后一个gzip_proxied选项，可以根据系统的实际情况决定，总共存在多种选项：

off：关闭Nginx对后台服务器的响应结果进行压缩。

expired：如果响应头中包含Expires信息，则开启压缩。

no-cache：如果响应头中包含Cache-Control:no-cache信息，则开启压缩。

no-store：如果响应头中包含Cache-Control:no-store信息，则开启压缩。

private：如果响应头中包含Cache-Control:private信息，则开启压缩。

no_last_modified：如果响应头中不包含Last-Modified信息，则开启压缩。

no_etag：如果响应头中不包含ETag信息，则开启压缩。

auth：如果响应头中包含Authorization信息，则开启压缩。

any：无条件对后端的响应结果开启压缩机制。

```
http{
    # 开启压缩机制
    gzip on;
    # 指定会被压缩的文件类型(也可自己配置其他类型)
    gzip_types text/plain application/javascript text/css application/xml text/javascript image/jpeg image/gif image/png;
    # 设置压缩级别，越高资源消耗越大，但压缩效果越好 1~9
    gzip_comp_level 5;
    # 在头部中添加Vary: Accept-Encoding（建议开启）
    gzip_vary on;
    # 处理压缩请求的缓冲区数量和大小
    gzip_buffers 16 8k;
    # 对于不支持压缩功能的客户端请求不开启压缩机制
    gzip_disable "MSIE [1-6]\."; # 低版本的IE浏览器不支持压缩
    # 设置压缩响应所支持的HTTP最低版本
    gzip_http_version 1.1;
    # 设置触发压缩的最小阈值
    gzip_min_length 2k;
    # 关闭对后端服务器的响应结果进行压缩
    gzip_proxied off;
}
```

## Nginx缓冲
缓存机制
缓冲区
缓存清理
```
http{  
    proxy_connect_timeout 10;  
    proxy_read_timeout 120;  
    proxy_send_timeout 10;  
    proxy_buffering on;  
    client_body_buffer_size 512k;  
    proxy_buffers 4 64k;  
    proxy_buffer_size 16k;  
    proxy_busy_buffers_size 128k;  
    proxy_temp_file_write_size 128k;  
    proxy_temp_path /soft/nginx/temp_buffer;  
}
```


## Nginx 防盗链
ngx_http_accesskey_module

## Nginx IP黑白名单
```
# --------黑名单：BlocksIP.conf---------  
deny 192.177.12.222; # 屏蔽192.177.12.222访问  
deny 192.177.44.201; # 屏蔽192.177.44.201访问  
deny 127.0.0.0/8; # 屏蔽127.0.0.1到127.255.255.254网段中的所有IP访问  
  
# --------白名单：WhiteIP.conf---------  
allow 192.177.12.222; # 允许192.177.12.222访问  
allow 192.177.44.201; # 允许192.177.44.201访问  
allow 127.45.0.0/16; # 允许127.45.0.1到127.45.255.254网段中的所有IP访问  
deny all; # 除开上述IP外，其他IP全部禁止访问  

http{  
    # 屏蔽该文件中的所有IP  
    include /soft/nginx/IP/BlocksIP.conf;   
 server{  
    location xxx {  
        # 某一系列接口只开放给白名单中的IP  
        include /soft/nginx/IP/blockip.conf;   
    }  
 }  
}

```


## Nginx 跨域
```
location / {  
    # 允许跨域的请求，可以自定义变量$http_origin，*表示所有  
    add_header 'Access-Control-Allow-Origin' *;  
    # 允许携带cookie请求  
    add_header 'Access-Control-Allow-Credentials' 'true';  
    # 允许跨域请求的方法：GET,POST,OPTIONS,PUT  
    add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT';  
    # 允许请求时携带的头部信息，*表示所有  
    add_header 'Access-Control-Allow-Headers' *;  
    # 允许发送按段获取资源的请求  
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';  
    # 一定要有！！！否则Post请求无法进行跨域！
    # 在发送Post跨域请求前，会以Options方式发送预检请求，服务器接受时才会正式请求  
    if ($request_method = 'OPTIONS') {  
        add_header 'Access-Control-Max-Age' 1728000;  
        add_header 'Content-Type' 'text/plain; charset=utf-8';  
        add_header 'Content-Length' 0;  
        # 对于Options方式的请求返回204，表示接受跨域请求  
        return 204;  
    }  
}
```

## Ngingx大文件传输配置
```
在传输大文件时，client_max_body_size、client_header_timeout、proxy_read_timeout、proxy_send_timeout这四个参数值都可以根据自己项目的实际情况来配置
```

## Nginx配置SLL证书
```
# ----------HTTPS配置-----------  
server {  
    # 监听HTTPS默认的443端口  
    listen 443;  
    # 配置自己项目的域名  
    server_name www.xxx.com;  
    # 打开SSL加密传输  
    ssl on;  
    # 输入域名后，首页文件所在的目录  
    root html;  
    # 配置首页的文件名  
    index index.html index.htm index.jsp index.ftl;  
    # 配置自己下载的数字证书  
    ssl_certificate  certificate/xxx.pem;  
    # 配置自己下载的服务器私钥  
    ssl_certificate_key certificate/xxx.key;  
    # 停止通信时，加密会话的有效期，在该时间段内不需要重新交换密钥  
    ssl_session_timeout 5m;  
    # TLS握手时，服务器采用的密码套件  
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  
    # 服务器支持的TLS版本  
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;  
    # 开启由服务器决定采用的密码套件  
    ssl_prefer_server_ciphers on;  
  
    location / {  
        ....  
    }  
}  
  
# ---------HTTP请求转HTTPS-------------  
server {  
    # 监听HTTP默认的80端口  
    listen 80;  
    # 如果80端口出现访问该域名的请求  
    server_name www.xxx.com;  
    # 将请求改写为HTTPS（这里写你配置了HTTPS的域名）  
    rewrite ^(.*)$ https://www.xxx.com;  
}
```

## Nginx的高可用
## Nginx性能优化