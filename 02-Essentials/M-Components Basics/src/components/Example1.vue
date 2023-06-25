<script setup lang="js">
import { ref, } from "vue";

const msg = ref(`When using a build step,
we typically define each Vue component in a dedicated file using the
.vue extension - known as a Single-File Component (SFC for short):`)

</script>

<template>
  <div class="example example1">
    {{ msg }}
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1. Defining a Component";
}
</style>
