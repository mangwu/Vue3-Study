<script setup>
import useMouseTracker from "../composables/useMouseTracker.js";
const { x, y } = useMouseTracker();
</script>

<template>
  <div class="example">Mouse position is at: {{ x }}, {{ y }}</div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "2. Mouse Tracker Example";
}
.wrapper {
  border: 1px solid var(--color-border);
  padding: 1em;
}
</style>
