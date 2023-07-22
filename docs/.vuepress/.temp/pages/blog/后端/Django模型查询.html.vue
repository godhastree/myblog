<template><div><h1 id="django-模型查询" tabindex="-1"><a class="header-anchor" href="#django-模型查询" aria-hidden="true">#</a> Django 模型查询</h1>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Model<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">.</span>order_by<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token operator">/</span>first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="比较查询" tabindex="-1"><a class="header-anchor" href="#比较查询" aria-hidden="true">#</a> 比较查询</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>__gt 大于
__gte 大于等于
__lt 小于
__lte 小于等于

<span class="token builtin">filter</span><span class="token punctuation">(</span>col__xx<span class="token operator">=</span>xx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h2>
</div></template>


