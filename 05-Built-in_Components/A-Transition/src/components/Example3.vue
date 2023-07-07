<script setup>
import FancyButton from "./FancyButton.vue";
import { ref } from "vue";

const idx = ref(0);
const className = ref("");

function next() {
  className.value = "next";
  idx.value++;
  idx.value %= 3;
}
function pre() {
  idx.value--;
  idx.value += 3;
  idx.value %= 3;
  className.value = "pre";
}
function onBeforeEnter(el) {
  el.classList.add(className.value);
}
function onBeforeLeave(el) {
  el.classList.add(className.value);
}
function onAfterEnter(el) {
  el.classList.remove(className.value);
}
</script>

<template>
  <div class="example">
    <h2>{{ $translate("example3.title") }}</h2>
    <FancyButton @click="pre">{{ $translate("example3.btn.0") }}</FancyButton>
    <FancyButton @click="next">{{ $translate("example3.btn.1") }}</FancyButton>
    <Transition
      mode="out-in"
      name="fade"
      @before-enter="onBeforeEnter"
      @before-leave="onBeforeLeave"
      @after-enter="onAfterEnter"
    >
      <div :key="idx">
        {{ $translate(`example3.content.${idx}`) }}
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2.3 CSS Transitions";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2.3 CSS 的 transition";
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.next.fade-enter-from {
  transform: translateX(-25%);
}
.next.fade-leave-to {
  transform: translateX(25%);
}
.pre.fade-enter-from {
  transform: translateX(25%);
}
.pre.fade-leave-to {
  transform: translateX(-25%);
}
</style>
