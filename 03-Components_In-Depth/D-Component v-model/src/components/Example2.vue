<script setup>
import Example2Son from "./Example2Son.vue";
import { ref } from "vue";
const modalValue = ref("Hello, Vue\n");
</script>

<template>
  <div class="example">
    <Example2Son v-model:title="modalValue" />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "1. v-model arguments";
}
</style>
