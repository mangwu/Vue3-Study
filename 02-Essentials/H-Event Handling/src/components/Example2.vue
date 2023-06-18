<script setup lang="js">
import { ref } from "vue";
const list = ref([
  "Method Handlers", 
  "Inline Handlers", 
  "v-on", 
  "JavaScript when they're triggered"
])
function remove(e, index) {
  list.value.splice(index, 1);
}
</script>

<template>
  <div class="example example2">
    <ul>
      <li v-for="(item, index) of list" :key="index">
        {{ item }}
        <button @click="(e) => remove(e, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example2:hover::before {
  content: "3. Method Handlers";
}
</style>
