<script setup>
import Example2 from "./components/Example2.vue";
import ExampleLast from "./components/ExampleLast.vue";
import Example3 from "./components/Example3.vue";
import { themeKey, exchangeThemeKey } from "./store/keys.js";
import { provide, ref, watch, defineAsyncComponent } from "vue";
const AsyncExample1 = defineAsyncComponent(() => {
  return import("./components/Example1.vue");
});

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
</script>

<template>
  <div class="app-wrapper">
    <AsyncExample1 />
    <Example2 />
    <Example3 />
    <!-- <Example5 /> -->
    <!-- <Example6 /> -->
    <!-- <Example7 /> -->
    <!-- <Example8 /> -->
    <!-- <Example9 /> -->
    <!-- <Example10 /> -->
    <!-- <Example11 /> -->
    <ExampleLast />
  </div>
</template>

<style scoped></style>
