<template><div><h1 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表"><span>反转链表</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>给定一个单链表的头结点pHead，长度为n，反转该链表后，返回新链表的表头。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>方法1：新建一个链表，并使用头插法一一插入其中</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token comment">/**
 * struct ListNode {
 *  int val;
 *  struct ListNode *next;
 * };
 */</span>

<span class="token comment">/**
 *
 * @param pHead ListNode类
 * @return ListNode类
 */</span>
<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">ReverseList</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> pHead <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write code here</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> tmp <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tmp<span class="token operator">-></span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> n <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>  n <span class="token operator">=</span> pHead<span class="token operator">-></span>next<span class="token punctuation">;</span> pHead<span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> n <span class="token operator">=</span> pHead<span class="token operator">-></span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pHead<span class="token operator">-></span>next <span class="token operator">=</span> tmp<span class="token operator">-></span>next<span class="token punctuation">;</span>
        tmp<span class="token operator">-></span>next <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
        pHead <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">return</span> tmp<span class="token operator">-></span>next<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=308&amp;tqId=23286&amp;ru=/exam/oj&amp;qru=/ta/algorithm-start/question-ranking&amp;sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


