<script setup>
import { ref } from "vue";
import FancyButton from "./FancyButton.vue";
const show = ref(true);
function clickHandler() {
  show.value = !show.value;
}
</script>

<template>
  <div class="example">
    <FancyButton @click="clickHandler">
      {{ $translate("common.0") }}
    </FancyButton>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <h2 v-show="show">
        {{ $translate("example5") }}
      </h2>
    </Transition>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2.5 Custom Transition Classes";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2.5 自定义过渡 class";
}
</style>
