<script setup>
import TransitionGsap from "./TransitionGsap.vue";
import FancyButton from "./FancyButton.vue";
import { ref } from "vue";
const keyV = ref(1);
function clickHandler() {
  keyV.value++;
}
</script>

<template>
  <div class="example">
    <FancyButton @click="clickHandler">
      {{ $translate("common.1") }}
    </FancyButton>
    <TransitionGsap appear>
      <div class="circle" :key="keyV">{{ keyV }}</div>
    </TransitionGsap>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "4. Reusable Transitions";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "4. 可复用过渡效果";
}
.circle {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  color: var(--color-text-heading);
  background-color: var(--color-primary);
  margin-top: 24px;
  margin-left: 24px;
  text-align: center;
  line-height: 36px;
}
</style>
