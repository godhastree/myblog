<template><div><h1 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> Nginx 配置</h1>
<h2 id="nginx反向代理-负载均衡" tabindex="-1"><a class="header-anchor" href="#nginx反向代理-负载均衡" aria-hidden="true">#</a> Nginx反向代理-负载均衡</h2>
<h2 id="配置块" tabindex="-1"><a class="header-anchor" href="#配置块" aria-hidden="true">#</a> 配置块</h2>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> root</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span> /run/nginx.pid</span><span class="token punctuation">;</span>

<span class="token comment"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span>
<span class="token directive"><span class="token keyword">include</span> /usr/share/nginx/modules/*.conf</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
<span class="token comment">## 日志格式设定</span>
    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">'<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> "<span class="token variable">$request</span>" '</span>
                      <span class="token string">'<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> "<span class="token variable">$http_referer</span>" '</span>
                      <span class="token string">'"<span class="token variable">$http_user_agent</span>" "<span class="token variable">$http_x_forwarded_for</span>"'</span></span><span class="token punctuation">;</span>
    <span class="token comment">## 访问日志位置</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  main</span><span class="token punctuation">;</span>
    <span class="token comment">## 支持文件发送(下载)</span>
    <span class="token directive"><span class="token keyword">sendfile</span>            <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">##此选项允许或禁止使用socke的TCP_CORK的选项（发送数据包前先缓存数据），此选项仅在使用sendfile的时候使用</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span>          <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span>         <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    
    <span class="token comment">##连接保持超时时间，单位是秒</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>   <span class="token number">65</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">types_hash_max_size</span> <span class="token number">4096</span></span><span class="token punctuation">;</span>
    
    <span class="token comment">## 文件扩展名与文件类型映射表</span>
    <span class="token directive"><span class="token keyword">include</span>             /etc/nginx/mime.types</span><span class="token punctuation">;</span>
    <span class="token comment">## 默认文件类型</span>
    <span class="token directive"><span class="token keyword">default_type</span>        application/octet-stream</span><span class="token punctuation">;</span>
    
    
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server_name</span> treenode.cn</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">rewrite</span> ^(.*)$ https://$</span><span class="token punctuation">{</span>server_name<span class="token punctuation">}</span>$1 <span class="token directive"><span class="token keyword">permanent</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">443</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">listen</span>       [::]:444</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  treenode.cn</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span>         /root/server/center_vuet/</span><span class="token punctuation">;</span>

        <span class="token comment">##网页的默认字符集</span>
        <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">ssl</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/nginx/cert/scs1679319679921_www.treenode.cn_server.crt</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/cert/scs1679319679921_www.treenode.cn_server.key</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">ssl_ciphers</span> ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token comment"># Load configuration files for the default server block.</span>
        <span class="token comment"># include /etc/nginx/default.d/*.conf;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:15173</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> /myblog</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">alias</span>  /root/server/myblog/docs/.vuepress/dist/</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span> <span class="token comment"># 入口文件</span>
            
            
        <span class="token punctuation">}</span>
        
        <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
	   <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:15001/</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> /404.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /40x.html</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        
        <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>~代表匹配时区分大小写
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源压缩" tabindex="-1"><a class="header-anchor" href="#资源压缩" aria-hidden="true">#</a> 资源压缩</h2>
<p>最后一个gzip_proxied选项，可以根据系统的实际情况决定，总共存在多种选项：</p>
<p>off：关闭Nginx对后台服务器的响应结果进行压缩。</p>
<p>expired：如果响应头中包含Expires信息，则开启压缩。</p>
<p>no-cache：如果响应头中包含Cache-Control:no-cache信息，则开启压缩。</p>
<p>no-store：如果响应头中包含Cache-Control:no-store信息，则开启压缩。</p>
<p>private：如果响应头中包含Cache-Control:private信息，则开启压缩。</p>
<p>no_last_modified：如果响应头中不包含Last-Modified信息，则开启压缩。</p>
<p>no_etag：如果响应头中不包含ETag信息，则开启压缩。</p>
<p>auth：如果响应头中包含Authorization信息，则开启压缩。</p>
<p>any：无条件对后端的响应结果开启压缩机制。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx缓冲" tabindex="-1"><a class="header-anchor" href="#nginx缓冲" aria-hidden="true">#</a> Nginx缓冲</h2>
<p>缓存机制
缓冲区
缓存清理</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http{  
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-防盗链" tabindex="-1"><a class="header-anchor" href="#nginx-防盗链" aria-hidden="true">#</a> Nginx 防盗链</h2>
<p>ngx_http_accesskey_module</p>
<h2 id="nginx-ip黑白名单" tabindex="-1"><a class="header-anchor" href="#nginx-ip黑白名单" aria-hidden="true">#</a> Nginx IP黑白名单</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># --------黑名单：BlocksIP.conf---------  
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-跨域" tabindex="-1"><a class="header-anchor" href="#nginx-跨域" aria-hidden="true">#</a> Nginx 跨域</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>location / {  
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ngingx大文件传输配置" tabindex="-1"><a class="header-anchor" href="#ngingx大文件传输配置" aria-hidden="true">#</a> Ngingx大文件传输配置</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>在传输大文件时，client_max_body_size、client_header_timeout、proxy_read_timeout、proxy_send_timeout这四个参数值都可以根据自己项目的实际情况来配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx配置sll证书" tabindex="-1"><a class="header-anchor" href="#nginx配置sll证书" aria-hidden="true">#</a> Nginx配置SLL证书</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># ----------HTTPS配置-----------  
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx的高可用" tabindex="-1"><a class="header-anchor" href="#nginx的高可用" aria-hidden="true">#</a> Nginx的高可用</h2>
<h2 id="nginx性能优化" tabindex="-1"><a class="header-anchor" href="#nginx性能优化" aria-hidden="true">#</a> Nginx性能优化</h2>
</div></template>


