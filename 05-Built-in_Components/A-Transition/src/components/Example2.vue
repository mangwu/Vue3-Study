<script setup>
import FancyButton from "./FancyButton.vue";
import { ref } from "vue";

const idx = ref(0);

function next() {
  idx.value++;
  idx.value %= 3;
}
function pre() {
  idx.value--;
  idx.value += 3;
  idx.value %= 3;
}
</script>

<template>
  <div class="example">
    <h2>{{ $translate("example2.title") }}</h2>
    <FancyButton @click="pre">{{ $translate("example2.btn.0") }}</FancyButton>
    <FancyButton @click="next">{{ $translate("example2.btn.1") }}</FancyButton>
    <Transition mode="out-in" name="fade">
      <div :key="idx">
        {{ $translate(`example2.content.${idx}`) }}
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2.2 Named Transitions";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2.2 为过渡效果命名";
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
