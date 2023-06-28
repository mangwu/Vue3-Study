<script setup lang="js">
import Example4Son from './Example4Son.vue';
const raw = {
  str: "ello Vue",
  num: 521,
  boo: true,
  arr: [25,34,12],
  obj: {
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }
}
</script>

<template>
  <div class="example example4">
    <example4-son v-bind="raw"/>
  </div>
</template>

<style scoped lang="css">
.example4:hover::before {
  content: "2.4 Binding Multiple Properties Using an Object";
}
</style>
