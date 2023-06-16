<script setup lang="js">
import {ref} from "vue";
const isAwesome = ref(true);
const isGood = ref(true);
const hasTemplate = ref(true);
function handler(e) {
  if(e.target.name === "awesome") {
    isAwesome.value = !isAwesome.value;
  } else if (e.target.name === "good") {
    isGood.value = !isGood.value;
  }
}
function closeTemplate() {
  hasTemplate.value = false
}
</script>

<template>
  <template v-if="hasTemplate">
    <div class="example exmaple4">
      hidden example4 by switch hasTemplate(current: {{ hasTemplate }}) to false:
      <button @click="closeTemplate" class="close-template">hidden it?</button>
      <br />
      <button @click="handler" name="awesome">
        isAwesome: {{ isAwesome }}
      </button>
      <button @click="handler" name="good">isGood: {{ isGood }}</button>
      <h1 v-if="isAwesome">Vue is awsome!😋</h1>
      <h1 v-else-if="isGood">Vue is good!😀</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
  </template>
</template>

<style scoped lang="css">
.exmaple4:hover::before {
  content: "4. v-if on template";
}
.close-template {
  background-color: red;
  color: white;
  border: none;
  font-size: 1.3em;
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
