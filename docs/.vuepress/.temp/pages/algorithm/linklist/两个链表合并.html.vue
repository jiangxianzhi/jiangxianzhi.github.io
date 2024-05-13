<template><div><h1 id="两个链表合并" tabindex="-1"><a class="header-anchor" href="#两个链表合并"><span>两个链表合并</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>如输入{1,3,5},{2,4,6}时，合并后的链表为{1,2,3,4,5,6}</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>输入的两个链表头部各一个指针慢慢往后推，谁小就插入新的链表中，直到结束</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code>
<span class="token comment">/**
 * struct ListNode {
 *  int val;
 *  struct ListNode *next;
 * };
 */</span>

<span class="token comment">/**
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */</span>
<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">Merge</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> pHead1<span class="token punctuation">,</span> <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> pHead2 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> res<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> dumy<span class="token operator">=</span>res<span class="token punctuation">;</span>
       <span class="token keyword">while</span><span class="token punctuation">(</span>pHead1<span class="token operator">&amp;&amp;</span>pHead2<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> node<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pHead1<span class="token operator">-></span>val<span class="token operator">&lt;</span>pHead2<span class="token operator">-></span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                node<span class="token operator">-></span>val <span class="token operator">=</span> pHead1<span class="token operator">-></span>val<span class="token punctuation">;</span>
                pHead1 <span class="token operator">=</span> pHead1<span class="token operator">-></span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                node<span class="token operator">-></span>val <span class="token operator">=</span> pHead2<span class="token operator">-></span>val<span class="token punctuation">;</span>
                pHead2 <span class="token operator">=</span> pHead2<span class="token operator">-></span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            res<span class="token operator">-></span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
            res <span class="token operator">=</span> res<span class="token operator">-></span>next<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       res<span class="token operator">-></span>next <span class="token operator">=</span> pHead1 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token operator">?</span> pHead2<span class="token operator">:</span>pHead1<span class="token punctuation">;</span>
       <span class="token keyword">return</span> dumy<span class="token operator">-></span>next<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=308&amp;tqId=23267&amp;ru=%2Fpractice%2Fd8b6b4358f774294a89de2a6ac4d9337&amp;qru=%2Fta%2Falgorithm-start%2Fquestion-ranking&amp;sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


