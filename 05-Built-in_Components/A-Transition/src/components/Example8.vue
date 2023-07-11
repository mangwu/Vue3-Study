<script setup>
import FancyButton from "./FancyButton.vue";
import { ref } from "vue";
import gsap from "gsap";
const show = ref(true);
const clickHandler = function () {
  show.value = !show.value;
};
function beforeEneterHandler(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  });
}
function enterHandler(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: "elastic.inOut(2.5, 1)",
    onComplete: done
  });
}

function leaveHandler(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 250,
    ease: "elastic.inOut(2.5, 1)"
  });
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  });
}
</script>

<template>
  <div class="example">
    <FancyButton @click="clickHandler">
      {{ $translate("common.0") }}
    </FancyButton>
    <Transition
      @before-enter="beforeEneterHandler"
      @enter="enterHandler"
      @leave="leaveHandler"
      :css="false"
    >
      <div class="circle" v-if="show"></div>
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "3. JavaScript Hooks";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "3. JavaScript 钩子";
}
.circle {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: var(--color-primary);
  margin-top: 24px;
  margin-left: 24px;
}
</style>
