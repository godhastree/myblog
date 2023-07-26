<template><div><h1 id="django-orm-增改删" tabindex="-1"><a class="header-anchor" href="#django-orm-增改删" aria-hidden="true">#</a> Django ORM (增改删)</h1>
<blockquote>
<p>ObjectModel():django.db.models.Model
ObjectSerializer:serializers.ModelSerializer</p>
</blockquote>
<h2 id="增加1" tabindex="-1"><a class="header-anchor" href="#增加1" aria-hidden="true">#</a> 增加1</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 增加数据的对象</span>
add_object <span class="token operator">=</span> ObjectModel<span class="token punctuation">(</span><span class="token punctuation">)</span>

add_object<span class="token punctuation">.</span>field1 <span class="token operator">=</span> <span class="token number">0</span>
add_object<span class="token punctuation">.</span>field2 <span class="token operator">=</span> <span class="token string">""</span>
add_object<span class="token punctuation">.</span>field3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

add_object<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># with serializers</span>
add_object_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
add_object_serializer <span class="token operator">=</span> ObjectSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>add_object_data<span class="token punctuation">)</span>
add_object_serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 调用 ModelSerializer.create(self, validated_data)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加n" tabindex="-1"><a class="header-anchor" href="#增加n" aria-hidden="true">#</a> 增加n</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 增加数据的对象列表</span>
add_object_list <span class="token operator">=</span> <span class="token punctuation">[</span>ObjectModel<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> xx <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">]</span>
<span class="token comment"># 批量存储</span>
ObjectModel<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>bulk_create<span class="token punctuation">(</span>add_object_list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加-1-n" tabindex="-1"><a class="header-anchor" href="#增加-1-n" aria-hidden="true">#</a> 增加 1-n</h2>
<h2 id="增加-n-1" tabindex="-1"><a class="header-anchor" href="#增加-n-1" aria-hidden="true">#</a> 增加 n-1</h2>
<h2 id="增加-n-n" tabindex="-1"><a class="header-anchor" href="#增加-n-n" aria-hidden="true">#</a> 增加 n-n</h2>
<h2 id="修改1" tabindex="-1"><a class="header-anchor" href="#修改1" aria-hidden="true">#</a> 修改1</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token builtin">object</span> <span class="token operator">=</span> ObjectModel<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span>field1<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token builtin">object</span><span class="token punctuation">.</span>field2 <span class="token operator">=</span> <span class="token string">'8848'</span>
<span class="token builtin">object</span><span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除1" tabindex="-1"><a class="header-anchor" href="#删除1" aria-hidden="true">#</a> 删除1</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>ObjectModel<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


