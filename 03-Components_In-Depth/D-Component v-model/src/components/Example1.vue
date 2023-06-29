<script setup>
import Example1Son from "./Example1Son.vue";
import { ref } from "vue";
const modalValue = ref("Hello, Vue\n");
</script>

<template>
  <div class="example">
    <Example1Son v-model="modalValue" />
  </div>
</template>

<style scoped lang="css"></style>
