import{_ as a,r as t,o as p,c as e,b as n,d as o,e as c,a as i}from"./app-PRfn_fru.js";const l={},r=i(`<h1 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序"><span>拓扑排序</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>给定一个数组，选择一些数，要求选择的数中任意两数差的绝对值不超过 kk 。问最多能选择多少个数</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>1 先排序，从小到大 2 使用双指针，left，right都在array[0]位置上，如果array[right]-array[left]&lt;=k,那么right就一直移动直到遍历所有点，否则left往right方向移动一格，方便后续right移动</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;malloc.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">QuickSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> low<span class="token punctuation">,</span> <span class="token keyword">int</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> low<span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> high<span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> arr<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 从右向左找第一个小于k的数</span>
                j<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 从左向右找第一个大于等于k的数</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>

        <span class="token comment">// 递归调用</span>
        <span class="token function">QuickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> low<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 排序k左边</span>
        <span class="token function">QuickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 排序k右边</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


    <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n<span class="token punctuation">;</span>
        <span class="token keyword">int</span> k<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span><span class="token operator">*</span> array <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token comment">// for(int i = 0;i&lt;n;i++){</span>
<span class="token comment">//     printf(&quot;%d&quot;,array[i]);</span>
<span class="token comment">// }</span>
        <span class="token comment">// for (int i = 0; i &lt; n; i++) {</span>
        <span class="token comment">//     for (int j = 0; j + 1 &lt; n - i; j++) {</span>
        <span class="token comment">//         if (array[j] &gt; array[j + 1]) {</span>
        <span class="token comment">//             int tmp = array[j];</span>
        <span class="token comment">//             array[j] = array[j + 1];</span>
        <span class="token comment">//             array[j + 1] = tmp;</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
<span class="token comment">// for(int i = 0;i&lt;n;i++){</span>
<span class="token comment">//     printf(&quot;%d&quot;,array[i]);</span>
<span class="token comment">// }</span>

<span class="token function">QuickSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">-</span> array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                l<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            max <span class="token operator">=</span> max <span class="token operator">&gt;</span> r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">?</span> max <span class="token operator">:</span> r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token operator">++</span>r<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u={id:"题目网站",tabindex:"-1"},k={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/562630ca90ac40ce89443c91060574c6?tpId=308&tqId=2403293&ru=%2Fpractice%2F237ae40ea1e84d8980c1d5666d1c53bc&qru=%2Fta%2Falgorithm-start%2Fquestion-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=t("ExternalLinkIcon");return p(),e("div",null,[r,n("h2",u,[n("a",k,[n("span",null,[n("a",d,[o("题目网站"),c(s)])])])])])}const y=a(l,[["render",v],["__file","最大不相差k.html.vue"]]),f=JSON.parse('{"path":"/algorithm/sort/%E6%9C%80%E5%A4%A7%E4%B8%8D%E7%9B%B8%E5%B7%AEk.html","title":"拓扑排序","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/sort/最大不相差k.md"}');export{y as comp,f as data};
