<script setup lang="js">
import { ref } from "vue";
const count = ref(1);
function handler(e, type = "add") {
  if (type === 'add') {
    count.value++;
  } else if (count.value > 0) {
    count.value--;
  }
}
</script>

<template>
  <div class="example example3">
    count: {{ count }}<button @click="handler">increment</button>
    <button @click="(e) => handler(e, 'subtraction')">subtraction</button>
    <ul>
      <li v-for="n in count" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: '3. v-for with a Range';
}

.example3 ul {
  height: 80%;
  overflow-y: scroll;
}
</style>
