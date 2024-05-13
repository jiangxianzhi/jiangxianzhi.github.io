import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/tree/tree1.html.vue"
const data = JSON.parse("{\"path\":\"/algorithm/tree/tree1.html\",\"title\":\"this is tree\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"algorithm/tree/tree1.md\"}")
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
