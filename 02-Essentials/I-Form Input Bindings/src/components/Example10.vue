<script setup lang="js">
import { ref } from "vue";
const msg = ref("");
</script>

<template>
  <div class="example example10">
    <div>Input number string</div>
    <input type="text" v-model.number="msg" />
    <div>msg: {{ msg }}, type: {{ typeof msg }}</div>
  </div>
</template>

<style scoped lang="css">
.example10:hover::before {
  content: "3.2 .number";
}
</style>
