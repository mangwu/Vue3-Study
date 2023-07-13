<script setup>
import gsap from "gsap";
defineProps({
  name: {
    type: String,
    default: ""
  }
});
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
  <template v-if="name === 'gsap'">
    <Transition
      @before-enter="beforeEneterHandler"
      @enter="enterHandler"
      @leave="leaveHandler"
      appear
      :css="false"
      mode="out-in"
      :name="name"
    >
      <slot></slot>
    </Transition>
  </template>
  <template v-else-if="name === 'fade'">
    <Transition mode="out-in" appear name="fade">
      <slot></slot>
    </Transition>
  </template>
  <template v-else-if="name === 'animation'">
    <Transition mode="out-in" appear name="animation">
      <slot></slot>
    </Transition>
  </template>
  <template v-else-if="name === 'modal'">
    <Transition appear name="modal">
      <slot></slot>
    </Transition>
  </template>
  <template v-else>
    <!-- 无过渡 -->
    <slot></slot>
  </template>
</template>

<style scoped lang="css">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.animation-enter-active {
  animation: bounce-in 0.5s;
}
.animation-leave-active {
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
/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-leave-from,
.modal-enter-to {
  opacity: 1;
}
.modal-leave-active,
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-active :deep(.modal-container),
.modal-enter-active :deep(.modal-container) {
  transition: all 0.3s ease;
}

.modal-enter-from :deep(.modal-container),
.modal-leave-to :deep(.modal-container) {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0;
}
</style>
