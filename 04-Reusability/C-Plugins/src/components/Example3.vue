<script setup>
import { ref } from "vue";
const value = ref("Hello");
const color = ref("#000");
</script>

<template>
  <div class="example">
    <div class="form">
      <input type="text" v-model="value" />
      <input type="color" v-model="color" />
    </div>
    <div v-demo="{ text: value, color }"></div>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "4. Object Literals";
}
.form {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
}
input {
  height: 28px;
}
</style>
