import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/software/nvm/index.html.vue"
const data = JSON.parse("{\"path\":\"/software/nvm/\",\"title\":\"nvm\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"github\",\"slug\":\"github\",\"link\":\"#github\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"software/nvm/README.md\"}")
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
