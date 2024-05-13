import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/test1.html.vue"
const data = JSON.parse("{\"path\":\"/test1.html\",\"title\":\"test\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"test1\",\"slug\":\"test1\",\"link\":\"#test1\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"test1.md\"}")
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
