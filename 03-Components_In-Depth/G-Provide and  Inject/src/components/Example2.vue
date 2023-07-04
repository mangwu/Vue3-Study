<script setup>
import { inject } from "vue";
const msg = inject("msg", () => "这是注入msg的默认值");
</script>
<template>
  <div class="grand-son example">
    Message to Example2: <span>{{ msg }}</span>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "4.1 Injection Default Values";
}
.grand-son {
  border: 1px solid var(--color-border);
  padding: 1em;
}
span {
  font-weight: 600;
}
</style>
