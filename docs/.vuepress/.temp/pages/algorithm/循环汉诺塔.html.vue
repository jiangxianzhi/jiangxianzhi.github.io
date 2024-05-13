<template><div><h1 id="循环汉诺塔" tabindex="-1"><a class="header-anchor" href="#循环汉诺塔"><span>循环汉诺塔</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>Eli最近迷上了汉诺塔。她玩了传统汉诺塔后突发奇想，发明了一种新的汉诺塔玩法。
有A、B、C三个柱子顺时针放置，移动的次序为A仅可以到B，B仅可以到C、C仅可以到A。即只可顺时针移动，不可逆时针移动。当然，汉诺塔的普适规则是适用的：每次移动后，大金片必须在小金片的下面。
现在A柱子上有n n 个金片。Eli想知道，她把这些全部移动到B或C，分别要多少次操作？</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>利用状态转移方程，由于不用求具体过程，找到一步步叠加的状态。\</p>
<p>AB(N) :表示N个移动一格
AC(N) ：表示N个移动两格</p>
<p>找到规律：AB(1) = 1;
AC(1) = 2;
AB(2) = 5;
AC(2) =7;
AC(1) =2 <em>AB(1);
AC(2)&lt; 2</em>AB(2);
所以当要移动n-1时，尽可能两个移动。</p>
<p>状态转移： AC(N) =AC(N-1)+AB(1)+CA(N-1)+BC(1)+AC(N-1)</p>
<pre><code>     AB(N) = AC(N-1)+AB(1)+CB(N-1)
</code></pre>
<p>简化一下 AC(N) = =2<em>AC(N-1)+AB(N-1)2</em>AB(1)
AB(N)  =2*AC(N-1)+AB(1)</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token comment">// 递归的方法不知道是int，long long类型原因还是什么计算超时</span>
<span class="token comment">// unsigned long long AC(int a);</span>
<span class="token comment">// unsigned long long AB(int a) {</span>

<span class="token comment">//     if (a == 1) {</span>
<span class="token comment">//         return 1;</span>
<span class="token comment">//     }</span>
<span class="token comment">// unsigned long long tmp = (2 * AC(a - 1) + AB(1))%1000000007;</span>

<span class="token comment">//     return tmp ;</span>
<span class="token comment">// }</span>
<span class="token comment">// unsigned long long AC(int a) {</span>

<span class="token comment">//     if (a == 1) {</span>
<span class="token comment">//         return 2;</span>
<span class="token comment">//     }</span>
<span class="token comment">// unsigned long long tmp = (2 * AC(a - 1) + 2*AB(1)+AB(a-1))%1000000007;</span>

<span class="token comment">//     return tmp ;</span>
<span class="token comment">// }</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 从递归改</span>
<span class="token comment">// unsigned long long a1 = AB(a);</span>
<span class="token comment">// unsigned long long a2 = AC(a);</span>
<span class="token keyword">int</span> a1<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a2<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>a<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">long</span> <span class="token keyword">int</span> tmp <span class="token operator">=</span> a1<span class="token punctuation">;</span>
   a1 <span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>a2<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">1000000007</span><span class="token punctuation">;</span>
   a2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>a2<span class="token operator">+</span>tmp<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">1000000007</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span>a1<span class="token punctuation">,</span>a2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 87350326 444</span>
<span class="token comment">// 2781183 3799167 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/cdf0808f841748faba058c8ef538c731?tpId=308&amp;tqId=1116945&amp;ru=/exam/oj&amp;qru=/ta/algorithm-start/question-ranking&amp;sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


