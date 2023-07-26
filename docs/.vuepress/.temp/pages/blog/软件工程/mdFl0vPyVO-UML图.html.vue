<template><div><h1 id="uml图" tabindex="-1"><a class="header-anchor" href="#uml图" aria-hidden="true">#</a> UML图</h1>
<h1 id="erd" tabindex="-1"><a class="header-anchor" href="#erd" aria-hidden="true">#</a> ERD</h1>
<div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre v-pre class="language-mermaid"><code><span class="token keyword">erDiagram</span>
    Person <span class="token punctuation">{</span>
        int id
        string name
    <span class="token punctuation">}</span>
    Movie <span class="token arrow operator">||--||</span> Person <span class="token operator">:</span> have
    Movie <span class="token punctuation">{</span>
           int id
           string movie_name
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


