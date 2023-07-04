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
    <img
      :src="theme === 'light' ? Light : Dark"
      alt=""
      @click="exchangeTheme"
    />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "Last. Change Theme";
}
.example {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
