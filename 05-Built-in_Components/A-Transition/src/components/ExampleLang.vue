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
    <img
      :src="
        theme === 'light'
          ? lang === 'en'
            ? EN
            : ZH
          : lang === 'en'
          ? EN_DARK
          : ZH_DARK
      "
      alt=""
      @click="(e) => changeLang(e, lang === 'en' ? 'zh-Hans' : 'en')"
    />
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
</style>
