export const data = JSON.parse("{\"key\":\"v-b6416da0\",\"path\":\"/blog/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/first.html\",\"title\":\"first\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/新建文件夹/first.md\"}")

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
