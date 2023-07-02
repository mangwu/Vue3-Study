<script setup>
import FancyButton from "./FancyButton.vue";
</script>

<template>
  <div class="example">
    <FancyButton />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "3. Fallback Content(";
}
</style>
