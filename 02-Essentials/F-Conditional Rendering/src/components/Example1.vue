<script setup lang="js">
import {ref} from "vue";
const hasAwesome = ref(false);
function handler() {
  hasAwesome.value = !hasAwesome.value;
}
</script>

<template>
  <div class="example exmaple1">
    <button @click="handler">hasAwesome: {{ hasAwesome }}</button>
    <h1 v-if="hasAwesome">Vue is awsome!</h1>
  </div>
</template>

<style scoped lang="css">
.exmaple1:hover::before {
  content: "1. v-if";
}
</style>
