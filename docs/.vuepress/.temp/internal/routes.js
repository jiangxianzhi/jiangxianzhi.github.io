export const redirects = JSON.parse("{\"/algorithm/stack/push&pop.html\":\"/algorithm/stack/push_pop.html\"}")

export const routes = Object.fromEntries([
  ["/MyProfile.html", { loader: () => import(/* webpackChunkName: "MyProfile.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/MyProfile.html.js"), meta: {"title":"个人简介"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/%E7%AE%97%E6%B3%95%E6%A8%A1%E6%9D%BF.html", { loader: () => import(/* webpackChunkName: "算法模板.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/算法模板.html.js"), meta: {"title":"拓扑排序"} }],
  ["/ghost/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/index.html.js"), meta: {"title":"“妖魔鬼怪”"} }],
  ["/ghost/%E4%B8%80%E5%BF%83%E5%A4%9A%E7%94%A8.html", { loader: () => import(/* webpackChunkName: "一心多用.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/一心多用.html.js"), meta: {"title":"一心多用"} }],
  ["/ghost/%E4%B8%8D%E6%92%9E%E5%8D%97%E5%A2%99%E7%BB%88%E4%B8%8D%E6%82%94.html", { loader: () => import(/* webpackChunkName: "不撞南墙终不悔.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/不撞南墙终不悔.html.js"), meta: {"title":"不撞南墙终不回"} }],
  ["/ghost/%E4%BA%BA%E8%BF%99%E4%B8%AA%E7%89%A9%E7%A7%8D%E7%9A%84%E4%BF%A1%E4%BB%BB%E6%9C%BA%E5%88%B6.html", { loader: () => import(/* webpackChunkName: "人这个物种的信任机制.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/人这个物种的信任机制.html.js"), meta: {"title":"人的信任机制"} }],
  ["/ghost/%E6%80%80%E7%96%91%E6%98%AF%E6%9C%80%E5%BC%BA%E5%A4%A7%E7%9A%84%E6%95%8C%E4%BA%BA.html", { loader: () => import(/* webpackChunkName: "怀疑是最强大的敌人.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/怀疑是最强大的敌人.html.js"), meta: {"title":"怀疑"} }],
  ["/ghost/%E8%A2%AB%E7%A7%8D%E4%B8%8B%E5%BF%83%E9%AD%94.html", { loader: () => import(/* webpackChunkName: "被种下心魔.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/被种下心魔.html.js"), meta: {"title":"被种下心魔"} }],
  ["/ghost/%E9%81%97%E5%BF%98.html", { loader: () => import(/* webpackChunkName: "遗忘.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/遗忘.html.js"), meta: {"title":""} }],
  ["/ghost/%E9%99%A4%E4%BA%86%E8%82%89%E4%BD%93%E4%B8%8A%E7%9A%84%E7%97%9B%E8%8B%A6%E5%85%B6%E4%BB%96%E7%97%9B%E8%8B%A6%E9%83%BD%E6%98%AF%E8%99%9A%E5%81%87%E7%9A%84.html", { loader: () => import(/* webpackChunkName: "除了肉体上的痛苦其他痛苦都是虚假的.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/除了肉体上的痛苦其他痛苦都是虚假的.html.js"), meta: {"title":"除了肉体上的痛苦其他痛苦都是虚假的"} }],
  ["/ghost/%E9%A6%99%E8%82%A0%E6%88%98%E6%9C%AF.html", { loader: () => import(/* webpackChunkName: "香肠战术.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ghost/香肠战术.html.js"), meta: {"title":"香肠战术"} }],
  ["/algorithm/graph/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/graph/index.html.js"), meta: {"title":""} }],
  ["/algorithm/graph/%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F.html", { loader: () => import(/* webpackChunkName: "拓扑排序.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/graph/拓扑排序.html.js"), meta: {"title":"拓扑排序"} }],
  ["/algorithm/graph/%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91.html", { loader: () => import(/* webpackChunkName: "最小生成树.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/graph/最小生成树.html.js"), meta: {"title":"最小生成树"} }],
  ["/algorithm/linklist/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/linklist/index.html.js"), meta: {"title":""} }],
  ["/algorithm/linklist/%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E5%90%88%E5%B9%B6.html", { loader: () => import(/* webpackChunkName: "两个链表合并.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/linklist/两个链表合并.html.js"), meta: {"title":"两个链表合并"} }],
  ["/algorithm/linklist/%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E8%8A%82%E7%82%B9.html", { loader: () => import(/* webpackChunkName: "删除链表节点.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/linklist/删除链表节点.html.js"), meta: {"title":"删除链表节点"} }],
  ["/algorithm/linklist/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.html", { loader: () => import(/* webpackChunkName: "反转链表.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/linklist/反转链表.html.js"), meta: {"title":"反转链表"} }],
  ["/algorithm/linklist/%E9%93%BE%E8%A1%A8.html", { loader: () => import(/* webpackChunkName: "链表.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/linklist/链表.html.js"), meta: {"title":"链表"} }],
  ["/algorithm/others/ranko%E6%89%8B%E8%A1%A8%E6%9E%9A%E4%B8%BE%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "ranko手表枚举法.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/others/ranko手表枚举法.html.js"), meta: {"title":"ranko手表枚举法"} }],
  ["/algorithm/others/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/others/index.html.js"), meta: {"title":"其他类型的算法题"} }],
  ["/algorithm/others/%E5%BE%AA%E7%8E%AF%E6%B1%89%E8%AF%BA%E5%A1%94.html", { loader: () => import(/* webpackChunkName: "循环汉诺塔.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/others/循环汉诺塔.html.js"), meta: {"title":"循环汉诺塔"} }],
  ["/algorithm/others/%E5%BF%AB%E9%80%9F%E5%B9%82.html", { loader: () => import(/* webpackChunkName: "快速幂.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/others/快速幂.html.js"), meta: {"title":"快速幂"} }],
  ["/algorithm/others/%E6%B4%BB%E5%8A%A8%E5%AE%89%E6%8E%92.html", { loader: () => import(/* webpackChunkName: "活动安排.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/others/活动安排.html.js"), meta: {"title":"活动安排"} }],
  ["/algorithm/others/%E7%A9%B7%E4%B8%BE%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "穷举法.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/others/穷举法.html.js"), meta: {"title":"穷举法"} }],
  ["/algorithm/others/%E7%A9%B7%E4%B8%BE%E6%B3%952.html", { loader: () => import(/* webpackChunkName: "穷举法2.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/others/穷举法2.html.js"), meta: {"title":"穷举法 2"} }],
  ["/algorithm/queue/Haffman.html", { loader: () => import(/* webpackChunkName: "Haffman.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/Haffman.html.js"), meta: {"title":"哈夫曼编码"} }],
  ["/algorithm/queue/kotori%E5%92%8C%E7%B4%A0%E5%9B%A0%E5%AD%90.html", { loader: () => import(/* webpackChunkName: "kotori和素因子.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/kotori和素因子.html.js"), meta: {"title":"kotori和素因子"} }],
  ["/algorithm/queue/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/index.html.js"), meta: {"title":""} }],
  ["/algorithm/queue/string%E5%87%BA%E7%8E%B0%E6%9C%80%E5%A4%9A%E7%9A%84char.html", { loader: () => import(/* webpackChunkName: "string出现最多的char.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/string出现最多的char.html.js"), meta: {"title":"string出现最多的char"} }],
  ["/algorithm/queue/%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html", { loader: () => import(/* webpackChunkName: "完全背包.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/完全背包.html.js"), meta: {"title":"完全背包"} }],
  ["/algorithm/queue/%E5%B2%9B%E5%B1%BF%E6%95%B0%E9%87%8F.html", { loader: () => import(/* webpackChunkName: "岛屿数量.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/岛屿数量.html.js"), meta: {"title":"岛屿数量"} }],
  ["/algorithm/queue/%E5%BE%AA%E7%8E%AF%E9%98%9F%E5%88%97.html", { loader: () => import(/* webpackChunkName: "循环队列.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/循环队列.html.js"), meta: {"title":"队循环队列列"} }],
  ["/algorithm/queue/%E6%B1%89%E8%AF%BA%E5%A1%94.html", { loader: () => import(/* webpackChunkName: "汉诺塔.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/汉诺塔.html.js"), meta: {"title":"汉诺塔"} }],
  ["/algorithm/queue/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98.html", { loader: () => import(/* webpackChunkName: "背包问题.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/背包问题.html.js"), meta: {"title":"最小背包"} }],
  ["/algorithm/queue/%E8%B5%B0%E8%BF%B7%E5%AE%AB.html", { loader: () => import(/* webpackChunkName: "走迷宫.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/走迷宫.html.js"), meta: {"title":"走迷宫"} }],
  ["/algorithm/queue/%E9%98%9F%E5%88%97.html", { loader: () => import(/* webpackChunkName: "队列.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/queue/队列.html.js"), meta: {"title":"队列"} }],
  ["/algorithm/sort/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/sort/index.html.js"), meta: {"title":"常见排序"} }],
  ["/algorithm/sort/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E5%8F%91.html", { loader: () => import(/* webpackChunkName: "二分查找发.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/sort/二分查找发.html.js"), meta: {"title":"二分查找发"} }],
  ["/algorithm/sort/%E6%8E%92%E5%BA%8F.html", { loader: () => import(/* webpackChunkName: "排序.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/sort/排序.html.js"), meta: {"title":"常见排序"} }],
  ["/algorithm/sort/%E6%9C%80%E5%A4%A7%E4%B8%8D%E7%9B%B8%E5%B7%AEk.html", { loader: () => import(/* webpackChunkName: "最大不相差k.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/sort/最大不相差k.html.js"), meta: {"title":"拓扑排序"} }],
  ["/algorithm/stack/push_pop.html", { loader: () => import(/* webpackChunkName: "push_pop.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/stack/push_pop.html.js"), meta: {"title":"栈的压入、弹出序列"} }],
  ["/algorithm/stack/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/stack/index.html.js"), meta: {"title":""} }],
  ["/algorithm/stack/stack.html", { loader: () => import(/* webpackChunkName: "stack.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/stack/stack.html.js"), meta: {"title":"Stack"} }],
  ["/algorithm/stack/%E6%9C%89%E6%95%88%E6%8B%AC%E5%8F%B7%E5%BA%8F%E5%88%97.html", { loader: () => import(/* webpackChunkName: "有效括号序列.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/stack/有效括号序列.html.js"), meta: {"title":"有效括号序列"} }],
  ["/algorithm/stack/%E7%82%B9%E5%87%BB%E6%B6%88%E9%99%A4.html", { loader: () => import(/* webpackChunkName: "点击消除.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/stack/点击消除.html.js"), meta: {"title":"点击消除"} }],
  ["/algorithm/stack/%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.html", { loader: () => import(/* webpackChunkName: "表达式求值.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/stack/表达式求值.html.js"), meta: {"title":"表达式求值"} }],
  ["/algorithm/stack/%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.html", { loader: () => import(/* webpackChunkName: "逆波兰表达式求值.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/stack/逆波兰表达式求值.html.js"), meta: {"title":"有效括号序列"} }],
  ["/algorithm/tree/Heap.html", { loader: () => import(/* webpackChunkName: "Heap.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/tree/Heap.html.js"), meta: {"title":"拓扑排序"} }],
  ["/algorithm/tree/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/tree/index.html.js"), meta: {"title":""} }],
  ["/algorithm/tree/%E4%BA%8C%E5%8F%89%E6%A0%91%E5%85%88%E4%B8%AD%E5%90%8E%E9%81%8D%E5%8E%86.html", { loader: () => import(/* webpackChunkName: "二叉树先中后遍历.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/tree/二叉树先中后遍历.html.js"), meta: {"title":"二叉树先中后遍历"} }],
  ["/algorithm/tree/%E9%80%9A%E8%BF%87%E4%B8%AD%E5%BA%8F%E5%90%8E%E5%BA%8F%E5%BE%97%E5%88%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html", { loader: () => import(/* webpackChunkName: "通过中序后序得到二叉树.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/tree/通过中序后序得到二叉树.html.js"), meta: {"title":"通过中序后序得到二叉树"} }],
  ["/program/Tetris-ts/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/program/Tetris-ts/index.html.js"), meta: {"title":"Tetris-ts"} }],
  ["/software/adguard/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/software/adguard/index.html.js"), meta: {"title":"adguard"} }],
  ["/software/macrodroid/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/software/macrodroid/index.html.js"), meta: {"title":"macrodroid"} }],
  ["/software/ngrok/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/software/ngrok/index.html.js"), meta: {"title":"ngrok"} }],
  ["/software/nvm/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/software/nvm/index.html.js"), meta: {"title":"nvm"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
