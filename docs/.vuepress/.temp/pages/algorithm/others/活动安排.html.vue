<template><div><h1 id="活动安排" tabindex="-1"><a class="header-anchor" href="#活动安排"><span>活动安排</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>给定nn个活动，每个活动安排的时间为[ai,bi)[ai​,bi​)。求最多可以选择多少个活动，满足选择的活动时间两两之间没有重合。
<img src="@source/algorithm/others/image-1.png" alt="alt text"></p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>贪心算法
先将活动越快结束排在前面排序。
顺序遍历所有活动，如果此活动开始时间比已经添加的活动的最晚结束时间大那么添加此活动。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>
<span class="token keyword">void</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">,</span> <span class="token keyword">int</span> low<span class="token punctuation">,</span> <span class="token keyword">int</span> high<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> low<span class="token punctuation">;</span> <span class="token comment">//第一位</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> high<span class="token punctuation">;</span> <span class="token comment">//最后一位</span>

    <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token punctuation">(</span>low<span class="token operator">+</span>high<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> keya <span class="token operator">=</span> a<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//将第一个数作为基准值-- 先找到一个基准值</span>
    <span class="token keyword">int</span> keyb <span class="token operator">=</span> b<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token punctuation">;</span>
    a<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    b<span class="token punctuation">[</span>temp<span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//进行排序---> 最终结果就是 左面的 都比基准值小 ，右面的都比 基准值大，所以这是所有循环的结束条件</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//下面的循环执行的条件是 如果右面的比基准值大，就赋一下值，否则继续向前移动</span>
        <span class="token comment">//---如果直接把循环写成下面这样---</span>
        <span class="token comment">//while(a[j] >= key) //如果下面的不写这个i&lt;j,这个就出错、越界，并且排序不准--理由：</span>
        <span class="token comment">//如果i&lt;j,并且： 右面的值 大于 基准值 时，j往前移动一个</span>
        <span class="token comment">//i 跟 j 的可能情况 只有 i&lt;j i==j</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">>=</span> keyb<span class="token punctuation">)</span><span class="token comment">//i&lt;j 是 当前while循环的结束条件，如果没有这个，i会大于j，出现越界，错误</span>
        <span class="token punctuation">{</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span><span class="token comment">//继续走</span>
        <span class="token punctuation">}</span><span class="token comment">//如果不成立，也就是 a[j] &lt;= key;右面的比key小了，那就换个位置</span>
        <span class="token comment">//把a[j]的数据给a[i]</span>
        b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">//将事先保存好的基准值与左边的值进行比较，如果基准值大，保持不变，i往前</span>
        <span class="token comment">//然后 判断一下这个新的a[i]，也就是之前的a[j]跟key值的关系---> 一定是 a[i]&lt;key</span>
        <span class="token comment">//所以把i向前移动一下，i++</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> keyb<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//移动完以后，把新的位置的a[i]的数值 给刚才的 a[j],然后开始下一次循环</span>
        b<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//跳出循环，将基准值放入数据a[i]中</span>
    b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> keyb<span class="token punctuation">;</span>
    a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> keya<span class="token punctuation">;</span>
    <span class="token comment">//对基准值左边 的所有数据 再次进行快速查找（递归）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">></span> low<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">quickSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> low<span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//对基准值右边的所有数据再次进行快速查找（递归）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">&lt;</span> high<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">quickSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token operator">*</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token operator">*</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token function">quickSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> border <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>border <span class="token operator">&lt;=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                border <span class="token operator">=</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/16d971e9e42e4f3b9b1e2b8794796a43?tpId=308&amp;tqId=2373697&amp;ru=/exam/oj&amp;qru=/ta/algorithm-start/question-ranking&amp;sourceUrl=%2Fexam%2Foj" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


