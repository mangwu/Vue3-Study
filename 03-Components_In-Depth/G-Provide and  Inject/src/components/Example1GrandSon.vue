<script setup>
import { inject } from "vue";
const msg = inject("msg");
</script>
<template>
  <div class="grand-son">Message to grand child: {{ msg }}</div>
</template>

<style scoped lang="css">
.grand-son {
  border: 1px solid #eee;
  padding: 1em;
}
</style>
