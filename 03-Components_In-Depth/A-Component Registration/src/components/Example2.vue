<script setup lang="js">
import Example2Son from "./Example2Son.vue";
</script>

<template>
  <div class="example example2">
    <example2-son v-for="i of 5" :key="i" />
  </div>
</template>

<style scoped lang="css">
.example2:hover::before {
  content: "2. Local Registration";
}
</style>
