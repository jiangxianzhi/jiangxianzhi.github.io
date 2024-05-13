import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ag/linklist/test2.html.vue"
const data = JSON.parse("{\"path\":\"/ag/linklist/test2.html\",\"title\":\"test2\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"test2\",\"slug\":\"test2-1\",\"link\":\"#test2-1\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"ag/linklist/test2.md\"}")
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
