<template><div><h1 id="django-restful" tabindex="-1"><a class="header-anchor" href="#django-restful" aria-hidden="true">#</a> Django restful</h1>
<h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2>
<p>View</p>
<p>APIView</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>request<span class="token punctuation">.</span>data
query_params
request_request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>Serializer<span class="token punctuation">(</span>instance<span class="token operator">=</span><span class="token punctuation">[</span><span class="token builtin">object</span><span class="token punctuation">]</span><span class="token punctuation">,</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment"># object => json     序列化</span>
Serializer<span class="token punctuation">(</span>data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token builtin">dict</span><span class="token punctuation">]</span><span class="token punctuation">)</span>                 <span class="token comment"># dict => object     反序列化</span>
ser<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 校验</span>
ser<span class="token punctuation">.</span>data        <span class="token comment"># 数据</span>
ser<span class="token punctuation">.</span>errors      <span class="token comment"># 异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


