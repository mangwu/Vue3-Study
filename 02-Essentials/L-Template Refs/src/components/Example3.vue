<script setup lang="js">
import { ref } from "vue";
const message = ref("");
function getInputValue(el) {
  if (el) {
    message.value = el.value;
  }
}
</script>

<template>
  <div class="example example2">
    <input type="text" :ref="getInputValue" placeholder="auto focus" value="inital value" />
    <p>Obtained input value by reference: {{ message }}</p>
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: "3. Function Refs";
}
</style>
