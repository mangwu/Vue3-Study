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
    <h2>{{ $translate("example6.title") }}</h2>
    <FancyButton @click="pre">{{ $translate("example6.btn.0") }}</FancyButton>
    <FancyButton @click="next">{{ $translate("example6.btn.1") }}</FancyButton>
    <Transition mode="out-in" name="fade" type="animation">
      <div :key="idx">
        {{ $translate(`example6.content.${idx}`) }}
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2.6 Using Transitions and Animations Together";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2.6 同时使用 transition 和 animation";
}
html[lang="en"] h2 {
  margin-top: 24px;
}

.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-active {
  animation: bounce-in 0.8s reverse;
  transition: opacity 0.8s ease-in;
}
.fade-enter-active {
  animation: bounce-in 0.8s;
  transition: opacity 0.8s ease-out;
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
