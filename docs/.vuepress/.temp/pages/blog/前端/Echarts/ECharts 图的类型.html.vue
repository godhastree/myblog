<template><div><h1 id="echarts-图的类型" tabindex="-1"><a class="header-anchor" href="#echarts-图的类型" aria-hidden="true">#</a> ECharts 图的类型</h1>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>eChartsRef<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> myChart <span class="token operator">=</span> eCharts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eChartsRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
    <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

div ref<span class="token operator">=</span>eChartsRef
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>option 的结构为</p>
<p>{</p>
<p>title</p>
<p>legend</p>
<p>grid</p>
<p>series</p>
<p>xAxis</p>
<p>yAxis</p>
<p>toolbox</p>
<p>tooltip</p>
<p>}</p>
</blockquote>
</div></template>


