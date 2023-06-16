<script setup lang="js">
import {ref} from "vue";
const isAwesome = ref(true);
const isGood = ref(true);
function handler(e) {
  if(e.target.name === "awesome") {
    isAwesome.value = !isAwesome.value;
  } else if (e.target.name === "good") {
    isGood.value = !isGood.value;
  }
}
</script>

<template>
  <div class="example exmaple3">
    <button @click="handler" name="awesome">isAwesome: {{ isAwesome }}</button>
    <button @click="handler" name="good">isGood: {{ isGood }}</button>
    <h1 v-if="isAwesome">Vue is awsome!😋</h1>
    <h1 v-else-if="isGood">Vue is good!😀</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>

<style scoped lang="css">
.exmaple3:hover::before {
  content: "3. v-else-if";
}
</style>
