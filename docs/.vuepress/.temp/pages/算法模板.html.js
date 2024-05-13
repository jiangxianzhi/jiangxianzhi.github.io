import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/算法模板.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%AE%97%E6%B3%95%E6%A8%A1%E6%9D%BF.html\",\"title\":\"拓扑排序\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"描述\",\"slug\":\"描述\",\"link\":\"#描述\",\"children\":[]},{\"level\":2,\"title\":\"思路\",\"slug\":\"思路\",\"link\":\"#思路\",\"children\":[]},{\"level\":2,\"title\":\"答案\",\"slug\":\"答案\",\"link\":\"#答案\",\"children\":[]},{\"level\":2,\"title\":\"题目网站\",\"slug\":\"题目网站\",\"link\":\"#题目网站\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"算法模板.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
