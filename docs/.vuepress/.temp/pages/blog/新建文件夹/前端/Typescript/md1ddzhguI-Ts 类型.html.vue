<template><div><h1 id="ts-类型" tabindex="-1"><a class="header-anchor" href="#ts-类型" aria-hidden="true">#</a> Ts 类型</h1>
<blockquote>
<p>1. 忽略报错</p>
<p>// eslint-disable-next-line @typescript-eslint/ban-ts-comment</p>
<p>// @ts-ignore</p>
</blockquote>
<h2 id="自定义类型" tabindex="-1"><a class="header-anchor" href="#自定义类型" aria-hidden="true">#</a> 自定义类型</h2>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code>联合类型
<span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
<span class="token keyword">interface</span> <span class="token class-name">x</span><span class="token punctuation">{</span>
    a1<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
交叉类型
类型别名
类型守卫
条件类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量基本类型" tabindex="-1"><a class="header-anchor" href="#变量基本类型" aria-hidden="true">#</a> 变量基本类型</h2>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token builtin">any</span> 任意类型
<span class="token keyword">null</span> 空类型
<span class="token keyword">undefined</span> 没找到类型 （如查找htmlelement）
<span class="token keyword">enum</span> 枚举类型
tuple 元组类型
array 数组类型
<span class="token builtin">boolean</span> 布尔类型
<span class="token builtin">number</span> 数字类型
<span class="token builtin">string</span> 字符串类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h2>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code>HTMLButtonElement
HTMLInputElement
HTMLFORMElement


MouseEvent
ChangeEvent
FormEvent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


