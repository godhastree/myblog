export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"我的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/KInMTq1.jpg\",\"tagline\":\"base,bb\",\"author\":\"<a href=\\\"https://www.bilibili.com/\\\" />\",\"date\":\"2023-07-13T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"个人相关\",\"slug\":\"个人相关\",\"link\":\"#个人相关\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
