<script setup>
import { inject } from "vue";
import { langKey, exchangeLangKey, themeKey } from "../store/keys.js";
import EN from "../assets/en.svg";
import ZH from "../assets/zh.svg";
import EN_DARK from "../assets/en_dark.svg";
import ZH_DARK from "../assets/zh_dark.svg";

const lang = inject(langKey);
const theme = inject(themeKey);
const exchangeLang = inject(exchangeLangKey);

function changeLang(_e, type = "zh-Hans") {
  exchangeLang(type);
}
</script>

<template>
  <div class="example">
    <Transition mode="out-in" name="fade" appear>
      <img
        v-if="theme === 'light' && lang === 'en'"
        :src="EN"
        alt="light_en"
        @click="(e) => changeLang(e, 'zh-Hans')"
      />
      <img
        v-else-if="theme === 'light' && lang !== 'en'"
        :src="ZH"
        alt="light_zh"
        @click="(e) => changeLang(e, 'en')"
      />
      <img
        v-else-if="theme === 'dark' && lang === 'en'"
        :src="EN_DARK"
        alt="dark_en"
        @click="(e) => changeLang(e, 'zh-Hans')"
      />
      <img
        v-else
        :src="ZH_DARK"
        alt="dark_zh"
        @click="(e) => changeLang(e, 'en')"
      />
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "Penultimate. Change Lang";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "倒二. 中英文切换";
}
.example {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  background-color: var(--backgroud-color-0);
  border-radius: 16px;
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
