<script setup lang="js">
import { ref } from "vue";
const list = ref([
  "Method Handlers",
  "Inline Handlers",
  "v-on",
  "JavaScript when they're triggered"
])
function remove(index,e) {
  list.value.splice(index, 1);
  console.log(e);
}
</script>

<template>
  <div class="example example3">
    <ul>
      <li v-for="(item, index) of list" :key="index">
        {{ item }}
        <button @click="remove(index, $event)">remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: "5. Accessing Event Argument in Inline Handler";
}
</style>
