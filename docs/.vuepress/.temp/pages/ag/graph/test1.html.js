import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ag/graph/test1.html.vue"
const data = JSON.parse("{\"path\":\"/ag/graph/test1.html\",\"title\":\"test1\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"test1\",\"slug\":\"test1-1\",\"link\":\"#test1-1\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"ag/graph/test1.md\"}")
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
