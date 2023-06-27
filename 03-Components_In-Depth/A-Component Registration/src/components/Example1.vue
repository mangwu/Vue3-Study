<script setup lang="js">
import { ref, } from "vue";

const msg = ref(`We can make components available globally in the current 
Vue application using the app.component() method:`)
</script>

<template>
  <div class="example example1">
    {{ msg }}
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: '1. Global Registration';
}
</style>
