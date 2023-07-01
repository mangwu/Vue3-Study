<script setup>
import Example4Son from "./Example4Son.vue";
import { ref } from "vue";
const theme = ref("light");
function handlerClick() {
  if (theme.value === "light") {
    theme.value = "dark";
  } else {
    theme.value = "light";
  }
}
</script>

<template>
  <div class="example">
    <Example4Son :class="[theme]" @click="handlerClick" />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "3. Attribute Inheritance on Multiple Root Nodes";
}
.dark {
  border: 1px solid #c7c7c7;
  background-color: #2a2a2a;
  user-select: none;
  color: #fff;
}
.light {
  border: 1px solid #393939;
  background-color: #ffffff;
  color: #000;
  user-select: none;
}
</style>
