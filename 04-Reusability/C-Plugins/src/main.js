import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
const appInstance = createApp(App);
appInstance.directive("demo", (el, binding) => {
  el.textContent = binding.value.text;
  el.style.color = binding.value.color;
});
appInstance.mount("#app");
