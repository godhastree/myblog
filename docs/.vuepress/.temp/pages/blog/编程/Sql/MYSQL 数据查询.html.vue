<template><div><h2 id="mysql-数据查询" tabindex="-1"><a class="header-anchor" href="#mysql-数据查询" aria-hidden="true">#</a> MYSQL 数据查询</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>条件查询
<span class="token keyword">SELECT</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
<span class="token keyword">FROM</span> table_name 
<span class="token keyword">WHERE</span> condition 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> column_name<span class="token punctuation">;</span>

分组查询
<span class="token keyword">SELECT</span> customer_id<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>order_amount<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_amount
<span class="token keyword">FROM</span> orders
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> customer_id<span class="token punctuation">;</span>


分组排序窗口查询
<span class="token keyword">SELECT</span> stu_name<span class="token punctuation">,</span> stu_class<span class="token punctuation">,</span> stu_score<span class="token punctuation">,</span>
       RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> stu_class <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> stu_score <span class="token keyword">DESC</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> rank
<span class="token keyword">FROM</span> students<span class="token punctuation">;</span>


查询转置
<span class="token operator">+</span><span class="token comment">---------+-----------+-------+</span>
<span class="token operator">|</span> stu_name<span class="token operator">|</span>  subject  <span class="token operator">|</span> score <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-----------+-------+</span>
<span class="token operator">|</span> Alice   <span class="token operator">|</span> Math      <span class="token operator">|</span> <span class="token number">90</span>    <span class="token operator">|</span>
<span class="token operator">|</span> Alice   <span class="token operator">|</span> English   <span class="token operator">|</span> <span class="token number">85</span>    <span class="token operator">|</span>
<span class="token operator">|</span> Alice   <span class="token operator">|</span> Science   <span class="token operator">|</span> <span class="token number">92</span>    <span class="token operator">|</span>
<span class="token operator">|</span> Bob     <span class="token operator">|</span> Math      <span class="token operator">|</span> <span class="token number">78</span>    <span class="token operator">|</span>
<span class="token operator">|</span> Bob     <span class="token operator">|</span> English   <span class="token operator">|</span> <span class="token number">80</span>    <span class="token operator">|</span>
<span class="token operator">|</span> Bob     <span class="token operator">|</span> Science   <span class="token operator">|</span> <span class="token number">88</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-----------+-------+</span>

<span class="token operator">+</span><span class="token comment">---------+--------+-----------+-------+</span>
<span class="token operator">|</span> stu_name<span class="token operator">|</span> Math   <span class="token operator">|</span> English   <span class="token operator">|</span> Science <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+--------+-----------+-------+</span>
<span class="token operator">|</span> Alice   <span class="token operator">|</span> <span class="token number">90</span>     <span class="token operator">|</span> <span class="token number">85</span>        <span class="token operator">|</span> <span class="token number">92</span>      <span class="token operator">|</span>
<span class="token operator">|</span> Bob     <span class="token operator">|</span> <span class="token number">78</span>     <span class="token operator">|</span> <span class="token number">80</span>        <span class="token operator">|</span> <span class="token number">88</span>      <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+--------+-----------+-------+</span>

<span class="token keyword">SELECT</span> 
    stu_name<span class="token punctuation">,</span>
    <span class="token function">MAX</span><span class="token punctuation">(</span><span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> subject <span class="token operator">=</span> <span class="token string">'Math'</span> <span class="token keyword">THEN</span> score <span class="token keyword">END</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> Math<span class="token punctuation">,</span>
    <span class="token function">MAX</span><span class="token punctuation">(</span><span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> subject <span class="token operator">=</span> <span class="token string">'English'</span> <span class="token keyword">THEN</span> score <span class="token keyword">END</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> English<span class="token punctuation">,</span>
    <span class="token function">MAX</span><span class="token punctuation">(</span><span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> subject <span class="token operator">=</span> <span class="token string">'Science'</span> <span class="token keyword">THEN</span> score <span class="token keyword">END</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> Science
<span class="token keyword">FROM</span> scores
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> stu_name<span class="token punctuation">;</span>

反之

<span class="token keyword">SELECT</span> stu_name<span class="token punctuation">,</span> <span class="token string">'Math'</span> <span class="token keyword">AS</span> subject<span class="token punctuation">,</span> Math <span class="token keyword">AS</span> score <span class="token keyword">FROM</span> scores
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span> stu_name<span class="token punctuation">,</span> <span class="token string">'English'</span> <span class="token keyword">AS</span> subject<span class="token punctuation">,</span> English <span class="token keyword">AS</span> score <span class="token keyword">FROM</span> scores
<span class="token keyword">UNION</span> <span class="token keyword">ALL</span>
<span class="token keyword">SELECT</span> stu_name<span class="token punctuation">,</span> <span class="token string">'Science'</span> <span class="token keyword">AS</span> subject<span class="token punctuation">,</span> Science <span class="token keyword">AS</span> score <span class="token keyword">FROM</span> scores<span class="token punctuation">;</span>



<span class="token keyword">SELECT</span> stu_name<span class="token punctuation">,</span> score<span class="token punctuation">,</span>
    <span class="token keyword">CASE</span> 
        <span class="token keyword">WHEN</span> score <span class="token operator">>=</span> <span class="token number">90</span> <span class="token keyword">THEN</span> <span class="token string">'优秀'</span>
        <span class="token keyword">WHEN</span> score <span class="token operator">>=</span> <span class="token number">80</span> <span class="token keyword">THEN</span> <span class="token string">'良好'</span>
        <span class="token keyword">WHEN</span> score <span class="token operator">>=</span> <span class="token number">60</span> <span class="token keyword">THEN</span> <span class="token string">'及格'</span>
        <span class="token keyword">ELSE</span> <span class="token string">'不及格'</span>
    <span class="token keyword">END</span> <span class="token keyword">AS</span> grade
<span class="token keyword">FROM</span> students<span class="token punctuation">;</span>

多列合并
<span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span>column1<span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">,</span> column2<span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">,</span> column3<span class="token punctuation">)</span> <span class="token keyword">AS</span> merged_column
<span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>


拆分一列
<span class="token keyword">SELECT</span> 
    SUBSTRING<span class="token punctuation">(</span>date_column<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token keyword">year</span><span class="token punctuation">,</span>
    SUBSTRING<span class="token punctuation">(</span>date_column<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token keyword">month</span><span class="token punctuation">,</span>
    SUBSTRING<span class="token punctuation">(</span>date_column<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token keyword">day</span>
<span class="token keyword">FROM</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


