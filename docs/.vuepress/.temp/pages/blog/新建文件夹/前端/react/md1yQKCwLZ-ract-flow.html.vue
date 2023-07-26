<template><div><h2 id="ract-flow" tabindex="-1"><a class="header-anchor" href="#ract-flow" aria-hidden="true">#</a> ract-flow</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> ReactFlow<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  MiniMap<span class="token punctuation">,</span>
  Controls<span class="token punctuation">,</span>
  Background<span class="token punctuation">,</span>
  useNodesState<span class="token punctuation">,</span>
  useEdgesState<span class="token punctuation">,</span>
  addEdge<span class="token punctuation">,</span>
  Edge<span class="token punctuation">,</span>
  Node<span class="token punctuation">,</span>
  Connection
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'reactflow'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">"reactflow/dist/style.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CustomNode <span class="token keyword">from</span> <span class="token string">'./components/CustomNode'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GNodeTypeMap <span class="token keyword">from</span> <span class="token string">'./GNodeTypeMap'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Gdata <span class="token keyword">from</span> <span class="token string">'./data/Gdata'</span><span class="token punctuation">;</span>
<span class="token comment">// import MindGraipPage from "../pages/ArticleSystem/MindGraipPage";</span>


<span class="token comment">// const initialNodes: Node[] = [</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: "1",</span>
<span class="token comment">//     type: "input",</span>
<span class="token comment">//     data: { label: "Node 1" },</span>
<span class="token comment">//     position: { x: 250, y: 5 }</span>
<span class="token comment">//   },</span>
<span class="token comment">//   { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },</span>
<span class="token comment">//   { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: "4",</span>
<span class="token comment">//     type: "custom",</span>
<span class="token comment">//     data: { label: "Custom Node" },</span>
<span class="token comment">//     position: { x: 400, y: 200 }</span>
<span class="token comment">//   }</span>
<span class="token comment">// ];</span>

<span class="token keyword">const</span> initialEdges<span class="token operator">:</span> Edge<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">"e5-8"</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">"5"</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token string">"8"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'smoothstep'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// { id: "e1-3", source: "1", target: "3" ,animated: true, }</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultEdgeOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  style<span class="token operator">:</span> <span class="token punctuation">{</span> strokeWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> stroke<span class="token operator">:</span> <span class="token string">'#9ca8b3'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  markerEnd<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">'arrowclosed'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MindGraipPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>nodes<span class="token punctuation">,</span> <span class="token punctuation">,</span> onNodesChange<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useNodesState</span><span class="token punctuation">(</span>Gdata<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>edges<span class="token punctuation">,</span> setEdges<span class="token punctuation">,</span> onEdgesChange<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useEdgesState</span><span class="token punctuation">(</span>initialEdges<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> onConnect <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>params<span class="token operator">:</span> Edge <span class="token operator">|</span> Connection<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setEdges</span><span class="token punctuation">(</span><span class="token punctuation">(</span>els<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">addEdge</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> els<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>setEdges<span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-full h-screen "</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">'w-10 h-10 bg-black'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>ReactFlow 
        nodeTypes<span class="token operator">=</span><span class="token punctuation">{</span>GNodeTypeMap<span class="token punctuation">}</span>
        nodes<span class="token operator">=</span><span class="token punctuation">{</span>nodes<span class="token punctuation">}</span>
        edges<span class="token operator">=</span><span class="token punctuation">{</span>edges<span class="token punctuation">}</span>
        onNodesChange<span class="token operator">=</span><span class="token punctuation">{</span>onNodesChange<span class="token punctuation">}</span>
        onEdgesChange<span class="token operator">=</span><span class="token punctuation">{</span>onEdgesChange<span class="token punctuation">}</span>
        defaultEdgeOptions<span class="token operator">=</span><span class="token punctuation">{</span>defaultEdgeOptions<span class="token punctuation">}</span>

        onConnect<span class="token operator">=</span><span class="token punctuation">{</span>onConnect<span class="token punctuation">}</span>
        snapToGrid
        fitView
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>Controls <span class="token operator">/</span><span class="token operator">></span>

        <span class="token punctuation">{</span><span class="token comment">/* &lt;MiniMap style={{ position: 'absolute', right: 10, top: 30, zIndex: 4 }} /> */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Background  gap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span> size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ReactFlow<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


