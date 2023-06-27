<script setup lang="js">
import {reactive} from "vue";
import Example1Son from "./Example1Son.vue";
const data = reactive({
  title: "Hello, Vue!",
  content: "Vue components require explicit props declaration so that Vue",
})
</script>

<template>
  <div class="example example1">
    <Example1Son :title="data.title" :content="data.content" />
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1. Props Declaration";
}
</style>
