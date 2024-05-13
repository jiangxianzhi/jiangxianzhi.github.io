import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/MyProfile.html.vue"
const data = JSON.parse("{\"path\":\"/MyProfile.html\",\"title\":\"个人简介\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"建立此网站目的\",\"slug\":\"建立此网站目的\",\"link\":\"#建立此网站目的\",\"children\":[{\"level\":3,\"title\":\"联系方式\",\"slug\":\"联系方式\",\"link\":\"#联系方式\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"MyProfile.md\"}")
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
