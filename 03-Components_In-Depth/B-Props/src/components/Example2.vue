<script setup lang="js">
import {reactive} from "vue";
import Example2Son from "./Example2Son.vue";
const data = reactive({
  title: "Hello, Vue!",
  content: "Vue components require explicit props declaration so that Vue",
})
</script>

<template>
  <div class="example example1">
    <example2-son :title="data.title" :article-content="data.content" />
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "2.1 Prop Name Casing";
}
</style>
