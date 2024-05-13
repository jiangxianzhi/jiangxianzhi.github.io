import comp from "D:/website/myBlog/MyContent/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/b.png\",\"actions\":[{\"text\":\"My Profile\",\"link\":\"/MyProfile\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Made by VuePress\",\"details\":\"It makes my feel like to buy the newest fashion shoes instead of make one\"},{\"title\":\"Vue-Powered\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"Content\",\"details\":\"Website contains Some knowledges & some Bad situations I have melt. And some of them I had figure a solution\"},{\"title\":\"About the Icon I used\",\"details\":\"This character is one of my favorite who gives me energy and courage a lot and his name is Might Guy\"}],\"footer\":\"Copyright © 2024-present JJKLJJ\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
