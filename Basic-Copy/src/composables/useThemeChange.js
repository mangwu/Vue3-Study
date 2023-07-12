import { themeKey, exchangeThemeKey } from "../store/keys.js";
import { provide, ref, watch } from "vue";

export default function useThemeChange() {
  const theme = ref(sessionStorage.getItem("themeKey") || "light");
  function changeTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
  }
  watch(
    () => theme.value,
    () => {
      document.documentElement.setAttribute("class", theme.value);
      sessionStorage.setItem("themeKey", theme.value);
    },
    { immediate: true }
  );
  provide(themeKey, theme);
  provide(exchangeThemeKey, changeTheme);
  return { theme };
}
