import { langKey, exchangeLangKey } from "../store/keys.js";
import { provide, ref, watch } from "vue";
import dispatchStorageEvent from "../utils/dispathStorageEvent.js";

export default function useLangChange() {
  const lang = ref(sessionStorage.getItem("langKey") || "zh-Hans");
  function changeLang(value) {
    lang.value = value;
  }
  watch(
    () => lang.value,
    () => {
      document.documentElement.setAttribute("lang", lang.value);
      sessionStorage.setItem("langKey", lang.value);
      dispatchStorageEvent("lang", "setItem");
    },
    { immediate: true }
  );
  provide(langKey, lang);
  provide(exchangeLangKey, changeLang);
  return { lang };
}
