import{_ as a,r as p,o as t,c as e,b as n,d as o,e as c,a as l}from"./app-in_WKorJ.js";const i={},u=l(`<h1 id="队循环队列列" tabindex="-1"><a class="header-anchor" href="#队循环队列列"><span>队循环队列列</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>请你实现一个循环队列，该循环队列可利用的空间大小等于</p><p>n个int型变量的大小。 操作： push x：将</p><p>x加入到循环队列尾端。若循环队列已满，输出&quot;full&quot;(不含引号)，否则不输出任何内容。保证</p><p>x为int型整数。 front：输出队首元素，队首不出队。若队列为空，输出&quot;empty&quot;(不含引号)。 pop：输出队首元素，且队首出队。若队列为空，输出&quot;empty&quot;(不含引号)。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>使用一个array，两个指针front，back表示队列，队列指针。 随着输入一直装 直到满，满的判断条件是 （back+1)%array.length = front</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdbool.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token operator">*</span> data<span class="token punctuation">;</span>
    <span class="token keyword">int</span> front<span class="token punctuation">;</span>
    <span class="token keyword">int</span> back<span class="token punctuation">;</span>
    <span class="token keyword">int</span> capacity<span class="token punctuation">;</span><span class="token comment">//空间容量 = 固定长度 + 1 = n + 1，多开一个方便判空、判满</span>
<span class="token punctuation">}</span>cirQueue<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">QueueInit</span><span class="token punctuation">(</span>cirQueue<span class="token operator">*</span> obj<span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    obj<span class="token operator">-&gt;</span>data <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token operator">-&gt;</span>front <span class="token operator">=</span> obj<span class="token operator">-&gt;</span>back <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    obj<span class="token operator">-&gt;</span>capacity <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
bool <span class="token function">QueueIsFull</span><span class="token punctuation">(</span>cirQueue<span class="token operator">*</span> obj<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//back尾的下一个是front头就是满了</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>obj<span class="token operator">-&gt;</span>back <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> obj<span class="token operator">-&gt;</span>capacity <span class="token operator">==</span> obj<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
bool <span class="token function">QueueIsEmpty</span><span class="token punctuation">(</span>cirQueue<span class="token operator">*</span> obj<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token operator">-&gt;</span>front <span class="token operator">==</span> obj<span class="token operator">-&gt;</span>back<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
bool <span class="token function">QueuePush</span><span class="token punctuation">(</span>cirQueue<span class="token operator">*</span> obj<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">QueueIsFull</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    obj<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>obj<span class="token operator">-&gt;</span>back<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token comment">//注意边界</span>
    <span class="token comment">//模等一下置为有效范围</span>
    obj<span class="token operator">-&gt;</span>back <span class="token operator">%=</span> obj<span class="token operator">-&gt;</span>capacity<span class="token punctuation">;</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//empty传址用来判断循环队列是不是空</span>
<span class="token keyword">int</span> <span class="token function">QueueFront</span><span class="token punctuation">(</span>cirQueue<span class="token operator">*</span> obj<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">*</span> empty<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">QueueIsEmpty</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">*</span>empty <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> obj<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>obj<span class="token operator">-&gt;</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">QueuePop</span><span class="token punctuation">(</span>cirQueue<span class="token operator">*</span> obj<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">*</span> empty<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">QueueIsEmpty</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">*</span>empty <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> front <span class="token operator">=</span> obj<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>obj<span class="token operator">-&gt;</span>front<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//注意边界</span>
    <span class="token comment">//模等一下置为有效范围</span>
    obj<span class="token operator">-&gt;</span>front <span class="token operator">%=</span> obj<span class="token operator">-&gt;</span>capacity<span class="token punctuation">;</span>

    <span class="token keyword">return</span> front<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>q <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    cirQueue obj<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">,</span><span class="token operator">&amp;</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">QueueInit</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>obj<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> empty <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> s<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span><span class="token string">&quot;push&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
            bool flag <span class="token operator">=</span> <span class="token function">QueuePush</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>obj<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;full\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span><span class="token string">&quot;pop&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> front <span class="token operator">=</span> <span class="token function">QueuePop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>obj<span class="token punctuation">,</span><span class="token operator">&amp;</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>empty <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>front<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> front <span class="token operator">=</span> <span class="token function">QueueFront</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>obj<span class="token punctuation">,</span><span class="token operator">&amp;</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>empty <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>front<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r={id:"题目网站",tabindex:"-1"},k={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/0a3a216e50004d8bb5da43ad38bcfcbf?tpId=308&tqId=2372963&ru=%2Fpractice%2F885c1db3e39040cbae5cdf59fb0e9382&qru=%2Fta%2Falgorithm-start%2Fquestion-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("h2",r,[n("a",k,[n("span",null,[n("a",d,[o("题目网站"),c(s)])])])])])}const y=a(i,[["render",v],["__file","循环队列.html.vue"]]),h=JSON.parse('{"path":"/algorithm/queue/%E5%BE%AA%E7%8E%AF%E9%98%9F%E5%88%97.html","title":"队循环队列列","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/queue/循环队列.md"}');export{y as comp,h as data};
