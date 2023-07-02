<script setup>
import { ref } from "vue";
const btnText = ref("Click me!");
import FancyButton from "./FancyButton.vue";
</script>

<template>
  <div class="example">
    <input type="text" v-model="btnText" /><br />
    <FancyButton>{{ btnText }}</FancyButton>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "1. Slot Content and Outlet";
}
</style>
