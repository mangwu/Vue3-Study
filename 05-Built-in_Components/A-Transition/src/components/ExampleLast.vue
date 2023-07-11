<script setup>
import { inject } from "vue";
import { themeKey, exchangeThemeKey } from "../store/keys.js";
import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";

const theme = inject(themeKey);
const exchangeTheme = inject(exchangeThemeKey);
</script>

<template>
  <div class="example">
    <Transition mode="out-in" name="fade" appear>
      <img
        v-if="theme === 'light'"
        :src="Light"
        alt="light theme graph"
        @click="exchangeTheme"
      />
      <img v-else :src="Dark" alt="dark theme graph" @click="exchangeTheme" />
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "Last. Change Theme";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "最后. 主题切换";
}
.example {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
