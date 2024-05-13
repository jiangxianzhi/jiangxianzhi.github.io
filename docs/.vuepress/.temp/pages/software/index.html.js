import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/software/index.html.vue"
const data = JSON.parse("{\"path\":\"/software/\",\"title\":\"ngrok\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"官网地址\",\"slug\":\"官网地址\",\"link\":\"#官网地址\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"software/README.md\"}")
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
