import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/ag/stack/test1.html.vue"
const data = JSON.parse("{\"path\":\"/ag/stack/test1.html\",\"title\":\"a\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"ag/stack/test1.md\"}")
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
