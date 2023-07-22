export const themeData = JSON.parse("{\"colorModeSwitch\":true,\"logo\":\"/logo.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"博客\",\"link\":\"/blog/\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/yourusername\"}],\"sidebar\":{\"/blog/\":[{\"text\":\"系统设计\",\"collapsable\":true,\"children\":[\"/blog/系统设计/figma/figma Frame().md\"]},{\"text\":\"编程\",\"collapsable\":true,\"children\":[\"/blog/编程/Django/Django Model.md\",\"/blog/编程/Django/Django ORM.md\"]}],\"displayAllHeaders\":false,\"sidebarDepth\":1},\"search\":true,\"searchMaxSuggestions\":10,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}