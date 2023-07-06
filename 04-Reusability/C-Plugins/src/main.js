import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import i18nDictionary from "./plugins/i18nDictionary";
import { tranlate } from "./plugins/i18n";
import { ref } from "vue";
const msg = ref(tranlate("msg", i18nDictionary));
window.addEventListener("setItem", () => {
  msg.value = tranlate("msg", i18nDictionary);
});
const appInstance = createApp(App);
appInstance.use(i18n, i18nDictionary);
appInstance.use(
  {
    install(app, options) {
      app.provide("msg", msg);
      console.log(options);
    }
  },
  {
    customOption: "Hello, Vue!"
  }
);
appInstance.mount("#app");
