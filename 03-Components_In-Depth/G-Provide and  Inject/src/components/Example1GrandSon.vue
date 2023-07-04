<script setup>
import { inject } from "vue";
const msg = inject("msg");
</script>
<template>
  <div class="grand-son">
    Message to grand child: <span>{{ msg }}</span>
  </div>
</template>

<style scoped lang="css">
.grand-son {
  border: 1px solid var(--color-border);
  padding: 1em;
}
span {
  font-weight: 600;
}
</style>
