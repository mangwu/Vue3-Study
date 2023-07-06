export default {
  "zh-Hans": {
    msg: `此消息由在main.js中注册的插件提供。
    查看浏览器控制台以了解插件选项的信息`,
    example2: {
      title: "编写一个插件",
      content: [
        "为了更好地理解如何构建 Vue.js 插件，我们可以试着写一个简单的 i18n (国际化 (Internationalization) 的缩写) 插件。",
        "让我们从设置插件对象开始。建议在一个单独的文件中创建并导出它，以保证更好地管理逻辑，",
        "...",
        "用于查找的翻译字典对象则应当在插件被安装时作为 app.use() 的额外参数被传入"
      ]
    }
  },
  en: {
    msg: `This message is provied by a plugin registered in main.js. 
    View Browser Console for information of plugin options.`,
    example2: {
      title: "Writing a Plugin",
      content: [
        "In order to better understand how to create your own Vue.js plugins, we will create a very simplified version of a plugin that displays i18n (short for Internationalization) strings.",
        "Let's begin by setting up the plugin object. It is recommended to create it in a separate file and export it, ",
        "...",
        "The object containing the translated keys should be passed to the plugin during installation via additional parameters to app.use()"
      ]
    }
  }
};
