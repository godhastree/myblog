<template><div><h1 id="sql-ddl-数据库管理" tabindex="-1"><a class="header-anchor" href="#sql-ddl-数据库管理" aria-hidden="true">#</a> SQL DDL 数据库管理</h1>
<blockquote>
<p>DDL（Data Definition Language）：
DDL用于定义和管理数据库的结构，即表的创建、修改和删除等操作。DDL语句是用于数据库和表的元数据管理</p>
</blockquote>
<p>常见的DDL语句包括：</p>
<ul>
<li>CREATE: 用于创建数据库对象，如表、索引、视图等。</li>
<li>ALTER: 用于修改数据库对象的结构，如修改表结构、添加字段等。</li>
<li>DROP: 用于删除数据库对象，如删除表、索引等。</li>
<li>TRUNCATE: 用于清空表中的所有数据，但保留表结构。</li>
<li>COMMENT: 用于为数据库对象添加注释。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 创建表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> students <span class="token punctuation">(</span>
    id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    age <span class="token keyword">INT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 修改表结构</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> students
<span class="token keyword">ADD</span> email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除表</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> students<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


