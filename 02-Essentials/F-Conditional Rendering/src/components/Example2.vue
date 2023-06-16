<script setup lang="js">
import {ref} from "vue";
const isAwesome = ref(true);
function handler() {
  isAwesome.value = !isAwesome.value;
}
</script>

<template>
  <div class="example exmaple2">
    <button @click="handler">isAwesome: {{ isAwesome }}</button>
    <h1 v-if="isAwesome">Vue is awsome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>

<style scoped lang="css">
.exmaple2:hover::before {
  content: "2. v-else";
}
</style>
