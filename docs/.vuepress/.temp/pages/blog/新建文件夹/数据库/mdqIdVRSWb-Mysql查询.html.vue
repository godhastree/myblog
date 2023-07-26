<template><div><h1 id="mysql查询" tabindex="-1"><a class="header-anchor" href="#mysql查询" aria-hidden="true">#</a> mysql查询</h1>
<blockquote>
<p>EXPLAIN   # 分析查询语句</p>
<p>type 针对单表的访问方法</p>
<p>possible_keys 可能用到的索引</p>
<p>key 实际上使用的索引</p>
<p>key_len 实际使用到的索引长度</p>
<p>rows 预估的需要读取的记录条数</p>
<p>Extra 一些额外的信息</p>
</blockquote>
<p>基本查询</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> col1<span class="token punctuation">,</span>col2 
<span class="token keyword">from</span> table_name
<span class="token keyword">limit</span> <span class="token number">0</span>
<span class="token keyword">offset</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>索引查询</p>
<p>条件查询</p>
<blockquote>
<p>and or Null like DISTINCT</p>
</blockquote>
<p>聚合查询/分组查询</p>
<blockquote>
<p>group by</p>
</blockquote>
<p>窗口函数</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>
序号函数：ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span>、RANK<span class="token punctuation">(</span><span class="token punctuation">)</span>、DENSE_RANK<span class="token punctuation">(</span><span class="token punctuation">)</span>

分布函数：PERCENT_RANK<span class="token punctuation">(</span><span class="token punctuation">)</span>、CUME_DIST<span class="token punctuation">(</span><span class="token punctuation">)</span>

前后函数：LAG<span class="token punctuation">(</span><span class="token punctuation">)</span>、LEAD<span class="token punctuation">(</span><span class="token punctuation">)</span>

头尾函数：FIRST_VALUE<span class="token punctuation">(</span><span class="token punctuation">)</span>、LAST_VALUE<span class="token punctuation">(</span><span class="token punctuation">)</span>

其它函数：NTH_VALUE<span class="token punctuation">(</span><span class="token punctuation">)</span>、NTILE<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">select</span> <span class="token operator">*</span> 
ROW_NUMBER<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> subject <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> score <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> ROW_NUM<span class="token punctuation">,</span>
<span class="token keyword">from</span> tabel_name



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>排序</p>
<p>联合查询</p>
</div></template>


