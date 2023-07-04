<script setup>
import Example1Son from "./Example1Son.vue";
import { ref, provide } from "vue";
const msg = ref("hello");
provide("msg", msg);
</script>

<template>
  <div class="example">
    <div class="wrapper">
      <input type="text" v-model="msg" />
    <Example1Son />
    </div>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "4. Inject";
}
.wrapper {
  border: 1px solid var(--color-border);
  padding: 1em;
}
</style>
