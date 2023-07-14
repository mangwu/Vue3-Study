<script setup></script>

<template>
  <div class="example">
    <div class="white" v-for="i of 7" :key="i">
      <div class="PlaceHolder-bg css-animation"></div>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "■■■■■■■■";
  color: var(--color-background-0);
}
html[lang="zh-Hans"] .example:hover::before {
  content: "■■■■■■■■";
  color: var(--color-background-0);
}
.example {
  display: flex;
  gap: 16px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-background-0);
}
.white {
  position: relative;
  background-color: var(--color-background-3);
  height: 8%;
  display: flex;
  align-items: center;
  overflow: hidden;
}
@keyframes slidein {
  0% {
    margin-left: -100%;
  }
  100% {
    margin-left: 100%;
  }
}
.white-bar {
  width: 100%;
  height: 100%;
  margin-left: -100%;
  animation: 0.5s linear 0.3s infinite running slidein;
}
.css-animation {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  font-size: 15px;
  -webkit-tap-highlight-color: rgba(18, 18, 18, 0);
  color: rgb(255, 255, 255);
  position: absolute;
  width: 200%;
  height: 100%;
  background: var(--c-loading-background);
  animation: 1s linear 1ms infinite normal forwards running move-animation;
}
@keyframes move-animation {
  0% {
    transform: translateX(-56%);
  }
  100% {
    transform: translateX(56%);
  }
}
</style>
