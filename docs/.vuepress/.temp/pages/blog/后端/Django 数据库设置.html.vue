<template><div><h1 id="django-数据库设置" tabindex="-1"><a class="header-anchor" href="#django-数据库设置" aria-hidden="true">#</a> Django 数据库设置</h1>
<blockquote>
<p>作者：kuku</p>
<p>创作日期：2023-06-11</p>
<p>更新日期：2023-06-11</p>
</blockquote>
<blockquote>
<p>介绍django数据库的设置与使用 ，以及常用命令</p>
<p>数据迁移至数据库</p>
<p>python manage.py makemigrations
python manage.py migrate --database=db1</p>
<p>反向迁移数据库</p>
<p>python manage.py inspectdb --database db1</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 配置文件</span>
<span class="token comment"># /project/settings.py</span>
DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'default'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'db1'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">'NAME'</span><span class="token punctuation">:</span> <span class="token string">'user_data'</span><span class="token punctuation">,</span>
        <span class="token string">'ENGINE'</span><span class="token punctuation">:</span> <span class="token string">'django.db.backends.mysql'</span><span class="token punctuation">,</span>
        <span class="token string">'USER'</span><span class="token punctuation">:</span> <span class="token string">'mysql_user'</span><span class="token punctuation">,</span>
        <span class="token string">'PASSWORD'</span><span class="token punctuation">:</span> <span class="token string">'superS3cret'</span>
        <span class="token string">'OPTIONS'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">'init_command'</span><span class="token punctuation">:</span> <span class="token string">"SET sql_mode='STRICT_TRANS_TABLES'"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'db2'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">'NAME'</span><span class="token punctuation">:</span> <span class="token string">'customer_data'</span><span class="token punctuation">,</span>
        <span class="token string">'ENGINE'</span><span class="token punctuation">:</span> <span class="token string">'django.db.backends.mysql'</span><span class="token punctuation">,</span>
        <span class="token string">'USER'</span><span class="token punctuation">:</span> <span class="token string">'mysql_cust'</span><span class="token punctuation">,</span>
        <span class="token string">'PASSWORD'</span><span class="token punctuation">:</span> <span class="token string">'veryPriv@ate'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步数据库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python manage.py migrate <span class="token parameter variable">--database</span><span class="token operator">=</span>db1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自定义数据库路由</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 配置文件</span>
<span class="token comment"># /project/settings.py</span>
DATABASES_APPS_MAPPING <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'author'</span><span class="token punctuation">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span>  <span class="token comment"># 数据库与APP应用一一对应</span>
    <span class="token string">'zydata'</span><span class="token punctuation">:</span> <span class="token string">'db1'</span><span class="token punctuation">,</span>  <span class="token comment"># 数据库与APP应用一一对应</span>
<span class="token punctuation">}</span>

<span class="token comment"># [your project] 是与settings.py同级的目录</span>
<span class="token comment"># database_app_router  python文件名 </span>
<span class="token comment"># DatabaseAppsRouter python类</span>
DATABASE_ROUTERS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'[your project].database_app_router.DatabaseAppsRouter'</span><span class="token punctuation">]</span>

<span class="token comment"># 自定义路由文件 照抄</span>
<span class="token comment"># /project/database_app_router.py</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>conf <span class="token keyword">import</span> settings

<span class="token keyword">class</span> <span class="token class-name">DatabaseAppsRouter</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token keyword">def</span> <span class="token function">db_for_read</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> model<span class="token punctuation">,</span> <span class="token operator">**</span>hints<span class="token punctuation">)</span><span class="token punctuation">:</span>
    app_label <span class="token operator">=</span> model<span class="token punctuation">.</span>_meta<span class="token punctuation">.</span>app_label
    <span class="token keyword">if</span> app_label <span class="token keyword">in</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">:</span>
        res <span class="token operator">=</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">[</span>app_label<span class="token punctuation">]</span>
        <span class="token keyword">return</span> res
    <span class="token keyword">return</span> <span class="token boolean">None</span>

<span class="token keyword">def</span> <span class="token function">db_for_write</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> model<span class="token punctuation">,</span> <span class="token operator">**</span>hints<span class="token punctuation">)</span><span class="token punctuation">:</span>
    app_label <span class="token operator">=</span> model<span class="token punctuation">.</span>_meta<span class="token punctuation">.</span>app_label
    <span class="token keyword">if</span> app_label <span class="token keyword">in</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">:</span>
        <span class="token keyword">return</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">[</span>app_label<span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token boolean">None</span>

<span class="token keyword">def</span> <span class="token function">allow_relation</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">,</span> <span class="token operator">**</span>hints<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取对应数据库的名字</span>
    db_obj1 <span class="token operator">=</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">.</span>get<span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>_mata<span class="token punctuation">.</span>app_label<span class="token punctuation">)</span>
    db_obj2 <span class="token operator">=</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">.</span>get<span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>_mata<span class="token punctuation">.</span>app_label<span class="token punctuation">)</span>
    <span class="token keyword">if</span> db_obj1 <span class="token keyword">and</span> db_obj2<span class="token punctuation">:</span>
        <span class="token keyword">if</span> db_obj1 <span class="token operator">==</span> db_obj2<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">None</span>

<span class="token keyword">def</span> <span class="token function">db_for_migrate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> db<span class="token punctuation">,</span> app_label<span class="token punctuation">,</span> model_name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token operator">**</span>hints<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> db <span class="token keyword">in</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">.</span>get<span class="token punctuation">(</span>app_label<span class="token punctuation">)</span> <span class="token operator">==</span> db
    <span class="token keyword">elif</span> app_label <span class="token keyword">in</span> settings<span class="token punctuation">.</span>DATABASES_APPS_MAPPING<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境" aria-hidden="true">#</a> 安装环境</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>https://pypi.org/project/mysqlclient/<span class="token comment">#:~:text=You%20may%20need%20to%20install%20the%20Python%203,install%20python3-devel%20mysql-devel%20%23%20Red%20Hat%20%2F%20CentOS</span>

pip <span class="token function">install</span> mysqlclient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


