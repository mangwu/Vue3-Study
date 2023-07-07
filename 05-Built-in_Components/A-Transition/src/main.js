import "./assets/main.css";
import "animate.css";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import i18nDictionary from "./plugins/i18nDictionary";

const appInstance = createApp(App);
appInstance.use(i18n, i18nDictionary);
appInstance.mount("#app");
