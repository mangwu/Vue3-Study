<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>

<template>
  <div class="example example1">
    <button @click="counter++">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "2. Inline Handlers";
}
</style>
