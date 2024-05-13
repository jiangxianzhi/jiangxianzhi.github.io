<template><div><h1 id="走迷宫" tabindex="-1"><a class="header-anchor" href="#走迷宫"><span>走迷宫</span></a></h1>
<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2>
<p>给定一个n×mn×m的网格，在网格中每次在不超过边界的情况下可以选择向上、向下、向左、向右移动一格。网格中的一些格子上放置有障碍物，放有障碍物的格子不能到达。求从(xs,ys)(xs​,ys​)到(xt,yt)(xt​,yt​)最少的移动次数。若不能到达，输出−1。
<img src="@source/algorithm/queue/image.png" alt="alt text"></p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2>
<p>bfs,先创建一个一样大小的二维数组，book[x][y]代表走到其位置x,y需要的步数，同时0表示没有走到过，</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="token comment">// 输入： 5 5</span>
<span class="token comment">// 1 1 5 5</span>
<span class="token comment">// .....</span>
<span class="token comment">// ****.</span>
<span class="token comment">// .....</span>
<span class="token comment">// **.**</span>
<span class="token comment">// .....</span>
<span class="token comment">// 从（1，1）位置到（5，5）位置</span>
<span class="token comment">//  假设这是笛卡尔坐标</span>
<span class="token comment">// 变成从（0，0）位置到（4，4）位置</span>
<span class="token comment">// 输出最小步数为 12</span>

<span class="token comment">// 思路：如同水滴从空中往下掉下，溅起阵阵涟漪</span>
<span class="token comment">// 设置一个数组，所有探索过的坐标+边界坐标放入其中，</span>
<span class="token comment">// 此坐标数组+范围限制 ，表示探索到此，就不会继续探索</span>
<span class="token comment">// 设置另一个数组，表示所有到此的步数，选出最小的</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h></span></span>





<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> height<span class="token punctuation">,</span> width<span class="token punctuation">;</span>
    <span class="token comment">// 迷宫的高 宽</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>height<span class="token punctuation">,</span> <span class="token operator">&amp;</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> sourceX<span class="token punctuation">,</span> sourceY<span class="token punctuation">;</span>
    <span class="token comment">// 源坐标</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>sourceX<span class="token punctuation">,</span> <span class="token operator">&amp;</span>sourceY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> desX<span class="token punctuation">,</span> desY<span class="token punctuation">;</span>
    <span class="token comment">// 目的坐标</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>desX<span class="token punctuation">,</span> <span class="token operator">&amp;</span>desY<span class="token punctuation">)</span><span class="token punctuation">;</span>

    sourceX <span class="token operator">=</span> sourceX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    sourceY <span class="token operator">=</span> sourceY <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    desX <span class="token operator">=</span> desX <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    desY <span class="token operator">=</span> desY <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>


    <span class="token keyword">char</span> array<span class="token punctuation">[</span><span class="token number">10001</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1001</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 输入迷宫障碍分布</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> height<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%s"</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// for(int i = 0;i&lt;5;i++){</span>
    <span class="token comment">//     for(int j=0;j&lt;5;j++){</span>
    <span class="token comment">//         printf("%c",array[i][j]);</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//     printf("\n");</span>
    <span class="token comment">// }</span>

    <span class="token comment">//  暂存队列   [[1,1],[2,2]....]</span>
    <span class="token comment">// int** tempArray = (int**)malloc(1000 * 1000 * sizeof(int*));</span>
    <span class="token comment">// for (int i = 0; i &lt; 2; i++) {</span>
    <span class="token comment">//     tempArray[i] = (int*)malloc(2 * sizeof(int));</span>
    <span class="token comment">// }</span>
    <span class="token keyword">int</span> tempArray<span class="token punctuation">[</span><span class="token number">1001</span><span class="token operator">*</span><span class="token number">1001</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> head <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> tail <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">//二维到达过点图,0表示没有到达，其他表示到达过的步数</span>
    <span class="token comment">// int** book = (int**)malloc(1001 * sizeof(int*));</span>
    <span class="token comment">// for (int i = 0; i &lt; 1001; i++) {</span>
    <span class="token comment">//     book[i] = (int*)malloc(1001 * sizeof(int));</span>
    <span class="token comment">// }</span>
    <span class="token keyword">int</span> book<span class="token punctuation">[</span><span class="token number">1001</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1001</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// for (int i = 0; i &lt; 1001; i++) {</span>
    <span class="token comment">//     for (int j = 0; j &lt; 1001; j++) {</span>
    <span class="token comment">//        printf("%d", book[i][j] );</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// }</span>
    <span class="token comment">//移动方向</span>
    <span class="token keyword">int</span> dx<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> dy<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//放入起始点</span>
    book<span class="token punctuation">[</span>sourceX<span class="token punctuation">]</span><span class="token punctuation">[</span>sourceY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 为了防止往回走，设置成1，到最后需要减去1</span>
    <span class="token comment">//     for (int i = 0; i &lt; 1001; i++) {</span>
    <span class="token comment">//     for (int j = 0; j &lt; 1001; j++) {</span>
    <span class="token comment">//        printf("%d", book[i][j] );</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// }</span>
    tempArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> sourceX<span class="token punctuation">;</span>
    tempArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> sourceY<span class="token punctuation">;</span>
    tail<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&lt;</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x1<span class="token punctuation">;</span>
        <span class="token keyword">int</span>  y1<span class="token punctuation">;</span>
        x1 <span class="token operator">=</span> tempArray<span class="token punctuation">[</span>head<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        y1 <span class="token operator">=</span> tempArray<span class="token punctuation">[</span>head<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        head<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//出队列</span>
        <span class="token comment">// 上下左右移动</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x2 <span class="token operator">=</span> x1 <span class="token operator">+</span> dx<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> y2 <span class="token operator">=</span> y1 <span class="token operator">+</span> dy<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>x2 <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x2 <span class="token operator">&lt;</span> height <span class="token operator">&amp;&amp;</span> y2 <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y2 <span class="token operator">&lt;</span> width <span class="token operator">&amp;&amp;</span> book<span class="token punctuation">[</span>x2<span class="token punctuation">]</span><span class="token punctuation">[</span>y2<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
                    array<span class="token punctuation">[</span>x2<span class="token punctuation">]</span><span class="token punctuation">[</span>y2<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'.'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                book<span class="token punctuation">[</span>x2<span class="token punctuation">]</span><span class="token punctuation">[</span>y2<span class="token punctuation">]</span> <span class="token operator">=</span> book<span class="token punctuation">[</span>x1<span class="token punctuation">]</span><span class="token punctuation">[</span>y1<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
                tempArray<span class="token punctuation">[</span>tail<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> x2<span class="token punctuation">;</span>
                tempArray<span class="token punctuation">[</span>tail<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> y2<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>book<span class="token punctuation">[</span>desX<span class="token punctuation">]</span><span class="token punctuation">[</span>desY<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"-1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> book<span class="token punctuation">[</span>desX<span class="token punctuation">]</span><span class="token punctuation">[</span>desY<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目网站" tabindex="-1"><a class="header-anchor" href="#题目网站"><span><a href="https://www.nowcoder.com/practice/e88b41dc6e764b2893bc4221777ffe64?tpId=308&amp;tqId=2373924&amp;ru=/exam/oj&amp;qru=/ta/algorithm-start/question-ranking&amp;sourceUrl=%2Fexam%2Foj" target="_blank" rel="noopener noreferrer">题目网站<ExternalLinkIcon/></a></span></a></h2>
</div></template>


