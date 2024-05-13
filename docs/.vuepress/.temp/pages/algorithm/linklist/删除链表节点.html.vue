<template><div><h1 id="删除链表节点" tabindex="-1"><a class="header-anchor" href="#删除链表节点"><span>删除链表节点</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。</p>
<p>1.此题对比原题有改动
2.题目保证链表中节点的值互不相同
3.该题只会输出返回的链表和结果做对比，所以若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>一次遍历找到要删除节点的前一个节点q,直接改变指向q-&gt;next = q-&gt;next-&gt;next绕过此节点</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token comment">/**
 * struct ListNode {
 *	int val;
 *	struct ListNode *next;
 * };
 */</span>
<span class="token comment">/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param val int整型
 * @return ListNode类
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>
<span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write code here</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p<span class="token operator">-></span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> tmp <span class="token operator">=</span> p<span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>p<span class="token operator">-></span>next<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>p<span class="token operator">=</span>p<span class="token operator">-></span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token operator">-></span>next<span class="token operator">-></span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        p<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> tmp<span class="token operator">-></span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/f9f78ca89ad643c99701a7142bd59f5d?tpId=308&amp;tqId=2273171&amp;ru=%2Fpractice%2Fd8b6b4358f774294a89de2a6ac4d9337&amp;qru=%2Fta%2Falgorithm-start%2Fquestion-ranking&amp;sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


