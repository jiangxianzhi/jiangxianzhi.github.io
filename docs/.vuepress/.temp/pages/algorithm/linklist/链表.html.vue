<template><div><h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表"><span>链表</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>请你实现一个链表。
操作：
insert x y：将</p>
<p>y加入链表，插入在第一个值为</p>
<p>x的结点之前。若链表中不存在值为</p>
<p>x的结点，则插入在链表末尾。保证</p>
<p>x,</p>
<p>y为int型整数。
delete x：删除链表中第一个值为</p>
<p>x的结点。若不存在值为</p>
<p>x的结点，则不删除。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>定义一个数据结构 node，一个储存data，一个指针指向下一个相同的结构，
遍历一次，插入。
遍历一次，删除。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">linkList</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">linkList</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
    <span class="token comment">/* data */</span>
<span class="token punctuation">}</span><span class="token operator">*</span> link<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span>link head<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>
    link p <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>p<span class="token operator">-></span>next<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-></span>next<span class="token operator">-></span>val <span class="token operator">==</span> x<span class="token punctuation">)</span><span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    link tmp  <span class="token operator">=</span> <span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">linkList</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tmp<span class="token operator">-></span>val <span class="token operator">=</span> y<span class="token punctuation">;</span>
    tmp<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    p<span class="token operator">-></span>next <span class="token operator">=</span> tmp<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">delete</span> <span class="token punctuation">(</span> link head<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>link p <span class="token operator">=</span> head<span class="token punctuation">;</span> p<span class="token operator">-></span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-></span>next<span class="token operator">-></span>val <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            link del <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
            p<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token operator">-></span>next<span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>del<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span>  <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    link head <span class="token operator">=</span> <span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">linkList</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    head<span class="token operator">-></span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化</span>
    <span class="token keyword">int</span> time <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>time<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%s"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'i'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//位置和插入数</span>
            <span class="token function">insert</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>  x<span class="token punctuation">,</span>  y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x<span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//删除数</span>
            <span class="token function">delete</span> <span class="token punctuation">(</span>head<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 输出</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token operator">-></span>next <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"NULL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span> link p <span class="token operator">=</span> head<span class="token punctuation">;</span> p<span class="token operator">-></span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> p<span class="token operator">-></span>next<span class="token operator">-></span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/97dc1ac2311046618fd19960041e3c6f?tpId=308&amp;tqId=2372688&amp;ru=%2Fpractice%2F0a3a216e50004d8bb5da43ad38bcfcbf&amp;qru=%2Fta%2Falgorithm-start%2Fquestion-ranking&amp;sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


