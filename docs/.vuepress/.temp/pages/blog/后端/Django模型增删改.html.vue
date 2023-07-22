<template><div><h1 id="django-模型增删改" tabindex="-1"><a class="header-anchor" href="#django-模型增删改" aria-hidden="true">#</a> Django 模型增删改</h1>
<h2 id="添加一条数据" tabindex="-1"><a class="header-anchor" href="#添加一条数据" aria-hidden="true">#</a> 添加一条数据</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>model <span class="token operator">=</span> Model<span class="token punctuation">(</span><span class="token operator">**</span><span class="token punctuation">[</span><span class="token builtin">dict</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加多条数据" tabindex="-1"><a class="header-anchor" href="#添加多条数据" aria-hidden="true">#</a> 添加多条数据</h2>
<h2 id="更新一条数据" tabindex="-1"><a class="header-anchor" href="#更新一条数据" aria-hidden="true">#</a> 更新一条数据</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>model <span class="token operator">=</span> Model<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>filed <span class="token operator">=</span> <span class="token string">''</span>
model<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除一条数据" tabindex="-1"><a class="header-anchor" href="#删除一条数据" aria-hidden="true">#</a> 删除一条数据</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
QueryObject<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


