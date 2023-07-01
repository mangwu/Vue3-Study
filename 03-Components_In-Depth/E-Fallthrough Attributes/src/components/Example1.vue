<script setup>
import Example1Son from "./Example1Son.vue";
</script>

<template>
  <div class="example example1">
    <Example1Son class="wrapper-define-class-name" />
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1. Attribute Inheritance";
}
.wrapper-define-class-name {
  border: 1px solid #eee;
  font-size: 25px;
}
</style>
