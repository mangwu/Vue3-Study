<script setup>
import MouseTracker from "./MouseTracker.vue";
</script>

<template>
  <div class="example">
    <MouseTracker v-slot="slotProps">
      Mouse is at: {{ slotProps.x }}, {{ slotProps.y }}
    </MouseTracker>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "6.3 Renderless Components";
}
</style>
