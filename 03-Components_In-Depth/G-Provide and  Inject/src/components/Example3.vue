<script setup>
import Example3Son from "./Example3Son.vue";
import { ref, provide, readonly } from "vue";
const msg = ref("hello");
const count = ref(0);
function setMsg(value) {
  msg.value = value;
}
provide("msg", msg);
provide("setMsg", setMsg);
provide("read-only-count", readonly(count));
</script>

<template>
  <div class="example">
    <div class="wrapper">
      <div>msg: ref("{{ msg }}")</div>
      <pre>{{ setMsg }}</pre>
      <div>readonly count: {{ count }}</div>
      <Example3Son />
    </div>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "5. Working with Reactivity";
}
.wrapper {
  border: 1px solid var(--color-border);
  padding: 0.3em;
}
</style>
