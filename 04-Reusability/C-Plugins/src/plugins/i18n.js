import { ref, unref } from "vue";
export function tranlate(key, options) {
  // 获取 `options` 对象的深层属性
  // 使用 `key` 作为索引
  const lang = sessionStorage.getItem("langKey") || "zh-Hans";
  key = lang + "." + key;
  return (
    key.split(".").reduce((o, i) => {
      if (o) return o[i];
    }, options) || key
  ); // 如果获取失败就返回 key
}

export default {
  install(app, options) {
    // 注入一个全局可用的 $translate() 方法 默认解包，直接返回结果
    app.config.globalProperties.$translate = (key, unwrapper = true) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      const translateRes = ref(tranlate(key, options));
      window.addEventListener("setItem", (e) => {
        if (e.key === "lang") {
          translateRes.value = tranlate(key, options);
        }
      });
      return unwrapper ? unref(translateRes) : translateRes;
    };
  }
};
