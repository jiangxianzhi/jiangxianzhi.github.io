<template><div><h1 id="二叉树先中后遍历" tabindex="-1"><a class="header-anchor" href="#二叉树先中后遍历"><span>二叉树先中后遍历</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>给定一棵二叉树，分别按照二叉树先序，中序和后序打印所有的节点。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>递归打印</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */</span>
<span class="token doc-comment comment">/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> TreeNode类 the root of binary tree
 * <span class="token keyword">@return</span> int整型二维数组
 */</span>
<span class="token keyword">function</span> <span class="token function">threeOrders</span><span class="token punctuation">(</span> <span class="token parameter">root</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token function-variable function">pre</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cur<span class="token punctuation">,</span>arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span><span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">pre</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">pre</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">mid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cur<span class="token punctuation">,</span>arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span><span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    <span class="token function">mid</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">mid</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">rear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cur<span class="token punctuation">,</span>arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span><span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    <span class="token function">rear</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">rear</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
     arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">pre</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">mid</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">rear</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">threeOrders</span> <span class="token operator">:</span> threeOrders
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/a9fec6c46a684ad5a3abd4e365a9d362?tpId=308&amp;tqId=1008937&amp;ru=/exam/oj&amp;qru=/ta/algorithm-start/question-ranking&amp;sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


