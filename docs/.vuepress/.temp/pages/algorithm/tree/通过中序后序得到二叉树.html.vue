<template><div><h1 id="通过中序后序得到二叉树" tabindex="-1"><a class="header-anchor" href="#通过中序后序得到二叉树"><span>通过中序后序得到二叉树</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>给定一个二叉树的中序与后序遍历结果，请你根据两个序列构造符合这两个序列的二叉树。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>递归思想找到root。
因为中序= x个左子树 + root+y个右子树  后序= x个左子树 + y个右子树 + root；
通过遍历中序找到某一个点 中序[i] = 后序[最后一个]，这个i就是root对应的位置。
root-&gt;left就在 中序= x各左子树，后序= x个左子树中同上方法找。
root-&gt;right 在中序 = y个右子树，后续= y个右子树中找。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token comment">/**
 * struct TreeNode {
 *	int val;
 *	struct TreeNode *left;
 *	struct TreeNode *right;
 * };
 */</span>
<span class="token comment">/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param inorder int整型一维数组 中序遍历序列
 * @param inorderLen int inorder数组长度
 * @param postorder int整型一维数组 后序遍历序列
 * @param postorderLen int postorder数组长度
 * @return TreeNode类
 */</span>
<span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inorderLen<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> postorder<span class="token punctuation">,</span> <span class="token keyword">int</span> postorderLen <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write code here</span>
<span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token operator">*</span> p<span class="token punctuation">;</span>
<span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>inorderLen <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">!=</span>postorder<span class="token punctuation">[</span>inorderLen<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//最后一个</span>
    index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果给的正确不会出现找不到的情况</span>
<span class="token punctuation">}</span>
p <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token operator">-></span>val <span class="token operator">=</span> inorder<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
p<span class="token operator">-></span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> index<span class="token punctuation">,</span> postorder<span class="token punctuation">,</span> postorderLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 因为长度一致，中序= x个左子树 + root+y个右子树  ，后序= x个左子树 + y个右子树 + root；</span>
<span class="token comment">// 所以找postorder [index -1]</span>
p<span class="token operator">-></span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token operator">+</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> inorderLen <span class="token operator">-</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> postorder<span class="token operator">+</span>index<span class="token punctuation">,</span> postorderLen<span class="token operator">-</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token keyword">return</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/ab8dde7f01f3440fbbb7993d2411a46b?tpId=308&amp;tqId=2312538&amp;ru=/exam/oj&amp;qru=/ta/algorithm-start/question-ranking&amp;sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
<p>s</p>
</div></template>


