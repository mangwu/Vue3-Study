<script setup>
import FancyButton from "./FancyButton.vue";
import { ref } from "vue";
const show = ref(true);
const clickHandler = function () {
  show.value = !show.value;
};
</script>

<template>
  <div class="example">
    <div class="wrapper">
      <FancyButton @click="clickHandler">
        {{ $translate("common.0") }}
      </FancyButton>
      <Transition :duration="1000">
        <div class="parent" v-if="show">
          <div class="inner"></div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2.7 Nested Transitions and Explicit Transition Durations";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2.7 深层级过渡与显式过渡时长";
}
.wrapper {
  margin: 0 auto;
  margin-top: 24px; 
}

.parent.v-leave-to,
.parent.v-enter-from {
  opacity: 0;
  transform: translateY(55px);
}
.parent.v-enter-to,
.parent.v-leave-from {
  opacity: 1;
}

.parent.v-enter-active,
.parent.v-leave-active {
  transition: all 0.5s ease;
}
.parent.v-leave-active {
  transition-delay: 0.5s;
}
.v-leave-to .inner,
.v-enter-from .inner {
  opacity: 0;
  transform: translateX(55px);
}
.v-enter-to .inner,
.v-leave-from .inner {
  opacity: 1;
}

.v-enter-active .inner,
.v-leave-active .inner {
  transition: all 0.5s ease;
}
.v-enter-active .inner {
  transition-delay: 0.5s;
}
.parent {
  width: 300px;
  height: 200px;
  padding: 40px;
  background-color: var(--color-background-2);
  border-radius: 4px;
}
.inner {
  background-color: var(--color-background-1);
  width: 220px;
  border-radius: 4px;
  height: 120px;
}
</style>
