<script setup lang="js">
import { ref } from "vue";
const msg = ref("");
const origin = ref("");
const handlerInput = (e) => {
  origin.value = e.target.value
}
</script>

<template>
  <div class="example example11">
    <div>Input number string</div>
    <input type="text" v-model.trim="msg" @input="handlerInput" />
    <div>origin: {{ origin }} {{ origin.length }}</div>
    <div>msg: {{ msg }} {{ msg.length }}</div>
  </div>
</template>

<style scoped lang="css">
.example11:hover::before {
  content: "3.3 .trim";
}
</style>
