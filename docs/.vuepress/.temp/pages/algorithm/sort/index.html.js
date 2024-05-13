import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/algorithm/sort/index.html.vue"
const data = JSON.parse("{\"path\":\"/algorithm/sort/\",\"title\":\"常见排序\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Examples\",\"slug\":\"examples\",\"link\":\"#examples\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"algorithm/sort/README.md\"}")
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
