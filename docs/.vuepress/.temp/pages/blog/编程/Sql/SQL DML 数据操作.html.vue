<template><div><h1 id="sql-dml-数据操作" tabindex="-1"><a class="header-anchor" href="#sql-dml-数据操作" aria-hidden="true">#</a> SQL DML 数据操作</h1>
<blockquote>
<p>DML（Data Manipulation Language）：
DML用于在数据库表中执行数据的查询、插入、更新和删除等操作。它允许您操作数据库中的实际数据。</p>
</blockquote>
<p>常见的DML语句包括：</p>
<ul>
<li>SELECT: 用于从数据库中查询数据。</li>
<li>INSERT: 用于向表中插入新数据。</li>
<li>UPDATE: 用于更新表中现有数据。</li>
<li>DELETE: 用于删除表中的数据。</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询数据</span>
<span class="token keyword">SELECT</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age <span class="token keyword">FROM</span> students <span class="token keyword">WHERE</span> age <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token comment">-- 插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> students <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 更新数据</span>
<span class="token keyword">UPDATE</span> students <span class="token keyword">SET</span> age <span class="token operator">=</span> <span class="token number">21</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'John'</span><span class="token punctuation">;</span>

<span class="token comment">-- 删除数据</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> students <span class="token keyword">WHERE</span> age <span class="token operator">></span> <span class="token number">30</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


