<script setup>
import FancyButton from "./FancyButton.vue";
import Example1Son1 from "./Example1Son1.vue";
import Example1Son2 from "./Example1Son2.vue";
import { ref } from "vue";

const show1 = ref(true);
const show2 = ref(true);
const show4 = ref(0);
const idx = ref(0);

function handlerShow1() {
  show1.value = !show1.value;
}
function handlerShow2() {
  show2.value = !show2.value;
}
function handlerCpnChange() {
  idx.value++;
  idx.value %= 2;
}
function handlerKeyChange() {
  show4.value++;
  show4.value %= 2;
}
</script>

<template>
  <div class="example">
    <div class="show show1">
      <FancyButton @click="handlerShow1">{{
        $translate("example1.5")
      }}</FancyButton>
      <Transition>
        <div v-if="show1">
          {{ $translate("example1.0") }}
        </div>
      </Transition>
    </div>
    <div class="show show2">
      <FancyButton @click="handlerShow2">{{
        $translate("example1.5")
      }}</FancyButton>
      <Transition>
        <div v-show="show2">
          {{ $translate("example1.1") }}
        </div>
      </Transition>
    </div>
    <div class="show show3">
      <FancyButton @click="handlerCpnChange">{{
        $translate("example1.5")
      }}</FancyButton>
      <Transition mode="out-in">
        <component :is="idx === 0 ? Example1Son1 : Example1Son2" class="son">
          {{ $translate(`example1.${idx + 2}`) }}
        </component>
      </Transition>
    </div>
    <div class="show show4">
      <FancyButton @click="handlerKeyChange">{{
        $translate("example1.5")
      }}</FancyButton>
      <Transition mode="out-in">
        <div :key="show4" class="son">
          {{ $translate("example1.4") }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "1. Introduction";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "1. 介绍";
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.show {
  display: flex;
  align-items: center;
  gap: 4px;
}
.show3,
.show4 {
  display: block;
}
</style>
