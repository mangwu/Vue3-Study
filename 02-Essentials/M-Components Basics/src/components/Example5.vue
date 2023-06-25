<script setup lang="js">
import Example5Slot from './Example5Slot.vue';
</script>

<template>
  <div class="example example5">
    <div class="wrapper">
      <Example5Slot> Something bad happened. </Example5Slot>
    </div>
  </div>
</template>

<style scoped lang="css">
.wrapper {
  position: relative;
}
.example5:hover::before {
  content: "5. Content Distribution with Slots";
}
</style>
