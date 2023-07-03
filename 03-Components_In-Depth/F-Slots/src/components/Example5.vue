<script setup>
import FancyButton from "./FancyButton.vue";
</script>

<template>
  <div class="example">
    <p>FancyButton can count the number of clicks on its own:</p>
    <FancyButton v-slot="slotProps"> {{ slotProps.count }}</FancyButton>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "6. Scoped Slots";
}
</style>
