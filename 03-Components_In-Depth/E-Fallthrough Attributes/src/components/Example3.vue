<script setup>
import Example3Son from "./Example3Son.vue";
import { ref } from "vue";
const theme = ref("light");
const title = ref("Hello, vue");
function handlerClick() {
  console.log("----");
  if (theme.value === "light") {
    theme.value = "dark";
  } else {
    theme.value = "light";
  }
}
</script>

<template>
  <div class="example">
    <Example3Son :class="[theme]" @click="handlerClick" :title="title" />
    <input type="text" v-model="title" />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "1.3 Nested Component Inheritance";
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
