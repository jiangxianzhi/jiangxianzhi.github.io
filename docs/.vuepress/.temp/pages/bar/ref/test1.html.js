import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/bar/ref/test1.html.vue"
const data = JSON.parse("{\"path\":\"/bar/ref/test1.html\",\"title\":\"test1\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"bar/ref/test1.md\"}")
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
