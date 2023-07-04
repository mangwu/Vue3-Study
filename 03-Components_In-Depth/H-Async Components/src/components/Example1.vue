<script setup>
import Example1Son from "./Example1Son.vue";
</script>

<template>
  <div class="example">
    Async loading from App.vue
    <Example1Son />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "1. Basic Usage";
}
.wrapper {
  border: 1px solid var(--color-border);
  padding: 1em;
}
</style>
