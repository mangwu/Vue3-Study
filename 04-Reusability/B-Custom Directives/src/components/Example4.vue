<script setup>
import { ref } from "vue";
import Example4Son from "./Example4Son.vue";
const value = ref("Hello");
const color = ref("#22aa33");
</script>

<template>
  <div class="example">
    <div class="form">
      <input type="text" v-model="value" />
      <input type="color" v-model="color" />
    </div>
    <div>Example4Son ↓</div>
    <Example4Son v-demo="{ text: value, color }" />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "5. Usage on Components";
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
