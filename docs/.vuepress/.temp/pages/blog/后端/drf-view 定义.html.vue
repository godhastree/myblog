<template><div><h1 id="drf-view-定义" tabindex="-1"><a class="header-anchor" href="#drf-view-定义" aria-hidden="true">#</a> drf-view 定义</h1>
<p>限流：throttle_classes</p>
<p>renderer_classes</p>
<p>parser_classes</p>
<p>parser_classes</p>
<p>permission_classes</p>
<p>schema</p>
<h2 id="apiview" tabindex="-1"><a class="header-anchor" href="#apiview" aria-hidden="true">#</a> APIView</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    authentication_classes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    permission_classes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword">pass</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generic-views" tabindex="-1"><a class="header-anchor" href="#generic-views" aria-hidden="true">#</a> Generic views</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>queryset 
serializer_class 
permission_classes 
lookup_field 

Base methods:
    get_queryset
    get_object
    filter_queryset(self, queryset)
    get_serializer_class    
    perform_create(self, serializer):
    perform_update(self, serializer):

generics.ListCreateAPIView::list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="createapiview-genericapiview-createmodelmixin" tabindex="-1"><a class="header-anchor" href="#createapiview-genericapiview-createmodelmixin" aria-hidden="true">#</a> CreateAPIView (GenericAPIView, CreateModelMixin)</h2>
<blockquote>
<p>post</p>
</blockquote>
<h2 id="listapiview-genericapiview-listmodelmixin" tabindex="-1"><a class="header-anchor" href="#listapiview-genericapiview-listmodelmixin" aria-hidden="true">#</a> ListAPIView (GenericAPIView, ListModelMixin)</h2>
<blockquote>
<p>get</p>
</blockquote>
<h2 id="retrieveapiview-genericapiview-retrievemodelmixin" tabindex="-1"><a class="header-anchor" href="#retrieveapiview-genericapiview-retrievemodelmixin" aria-hidden="true">#</a> RetrieveAPIView (GenericAPIView, RetrieveModelMixin)</h2>
<blockquote>
<p>get</p>
</blockquote>
<h2 id="destroyapiview-genericapiview-destroymodelmixin" tabindex="-1"><a class="header-anchor" href="#destroyapiview-genericapiview-destroymodelmixin" aria-hidden="true">#</a> DestroyAPIView (GenericAPIView, DestroyModelMixin)</h2>
<blockquote>
<p>delete</p>
</blockquote>
<h2 id="updateapiview-genericapiview-updatemodelmixin" tabindex="-1"><a class="header-anchor" href="#updateapiview-genericapiview-updatemodelmixin" aria-hidden="true">#</a> UpdateAPIView (GenericAPIView, UpdateModelMixin)</h2>
<blockquote>
<p>put</p>
</blockquote>
<h2 id="listcreateapiview-genericapiview-listmodelmixin-createmodelmixin" tabindex="-1"><a class="header-anchor" href="#listcreateapiview-genericapiview-listmodelmixin-createmodelmixin" aria-hidden="true">#</a> ListCreateAPIView (GenericAPIView, ListModelMixin, CreateModelMixin)</h2>
<blockquote>
<p>get/post</p>
</blockquote>
<h2 id="retrieveupdateapiview-genericapiview-retrievemodelmixin-updatemodelmixin" tabindex="-1"><a class="header-anchor" href="#retrieveupdateapiview-genericapiview-retrievemodelmixin-updatemodelmixin" aria-hidden="true">#</a> RetrieveUpdateAPIView (GenericAPIView, RetrieveModelMixin, UpdateModelMixin)</h2>
<blockquote>
<p>get/put/patch</p>
</blockquote>
<h2 id="retrievedestroyapiview-genericapiview-retrievemodelmixin-destroymodelmixin" tabindex="-1"><a class="header-anchor" href="#retrievedestroyapiview-genericapiview-retrievemodelmixin-destroymodelmixin" aria-hidden="true">#</a> RetrieveDestroyAPIView (GenericAPIView, RetrieveModelMixin, DestroyModelMixin)</h2>
<blockquote>
<p>get/delete</p>
</blockquote>
<h2 id="retrieveupdatedestroyapiview-genericapiview-retrievemodelmixin-updatemodelmixin-destroymodelmixin" tabindex="-1"><a class="header-anchor" href="#retrieveupdatedestroyapiview-genericapiview-retrievemodelmixin-updatemodelmixin-destroymodelmixin" aria-hidden="true">#</a> RetrieveUpdateDestroyAPIView (GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin)</h2>
<blockquote>
<p>get/put/patch/delete</p>
</blockquote>
<p>ViewSet</p>
</div></template>


