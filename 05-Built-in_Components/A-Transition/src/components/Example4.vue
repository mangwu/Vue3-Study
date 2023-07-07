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
    <h2>{{ $translate("example4.title") }}</h2>
    <FancyButton @click="pre">{{ $translate("example4.btn.0") }}</FancyButton>
    <FancyButton @click="next">{{ $translate("example4.btn.1") }}</FancyButton>
    <Transition mode="out-in" name="fade">
      <div :key="idx">
        {{ $translate(`example4.content.${idx}`) }}
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2.4 CSS Animations";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2.4 CSS 的 animation";
}
.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
