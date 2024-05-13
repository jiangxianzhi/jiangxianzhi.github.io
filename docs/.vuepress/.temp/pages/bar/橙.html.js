import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/bar/橙.html.vue"
const data = JSON.parse("{\"path\":\"/bar/%E6%A9%99.html\",\"title\":\"chen\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"chen\",\"slug\":\"chen\",\"link\":\"#chen\",\"children\":[]},{\"level\":2,\"title\":\"a\",\"slug\":\"a\",\"link\":\"#a\",\"children\":[]},{\"level\":2,\"title\":\"b\",\"slug\":\"b\",\"link\":\"#b\",\"children\":[]},{\"level\":2,\"title\":\"c\",\"slug\":\"c\",\"link\":\"#c\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"bar/橙.md\"}")
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
