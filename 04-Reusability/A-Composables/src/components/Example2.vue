<script setup>
import useMouseTracker2 from "../composables/useMouseTracker2.js";
const { x, y } = useMouseTracker2();
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
