import{_ as a,r as e,o as t,c as p,b as n,d as o,e as c,a as l}from"./app-CrKXQHLj.js";const i={},r=l(`<h1 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表"><span>反转链表</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>给定一个单链表的头结点pHead，长度为n，反转该链表后，返回新链表的表头。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>方法1：新建一个链表，并使用头插法一一插入其中</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/**
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
    tmp<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span> n <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">ListNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>  n <span class="token operator">=</span> pHead<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> pHead<span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> n <span class="token operator">=</span> pHead<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pHead<span class="token operator">-&gt;</span>next <span class="token operator">=</span> tmp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        tmp<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pHead<span class="token punctuation">;</span>
        pHead <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token keyword">return</span> tmp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d={id:"题目网站",tabindex:"-1"},u={class:"header-anchor",href:"#题目网站"},k={href:"https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=308&tqId=23286&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308",target:"_blank",rel:"noopener noreferrer"};function v(m,h){const s=e("ExternalLinkIcon");return t(),p("div",null,[r,n("h2",d,[n("a",u,[n("span",null,[n("a",k,[o("题目网站"),c(s)])])])])])}const _=a(i,[["render",v],["__file","反转链表.html.vue"]]),f=JSON.parse('{"path":"/algorithm/linklist/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html","title":"反转链表","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/linklist/反转链表.md"}');export{_ as comp,f as data};
