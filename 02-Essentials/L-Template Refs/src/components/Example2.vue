<script setup lang="js">
import { ref, watchEffect } from "vue";
const item = ref(["Accessing the Refs", "Refs inside v-for", "Function Refs", "Ref on Component"])
const index = ref(0);
const list = ref([])
watchEffect(() => {
  console.log(list.value[index.value]);
})
function handler() {
  index.value++;
  index.value %= 4;
}
</script>

<template>
  <div class="example example2">
    <ul>
      <li v-for="(n, i) of item" :key="i" ref="list">{{ n }}</li>
    </ul>
    <p>Obtained by reference: {{ list[index]?.textContent }}</p>
    <button @click="handler">add</button>
  </div>
</template>

<style scoped lang="css">
.example2:hover::before {
  content: "2. Refs inside v-for";
}
</style>
