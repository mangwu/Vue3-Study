<script setup>
import { reactive, ref } from "vue";
import Example2Son from "./Example2Son.vue";
const data = reactive([
  {
    title: "Hello, Vue!",
    content: "Vue components require explicit props declaration so that Vue"
  },
  {
    title: "Emitting and Listening to Events!",
    content:
      "A component can emit custom events directly in template expressions"
  },
  {
    title: "Event Arguments!",
    content:
      "It's sometimes useful to emit a specific value with an event. in charge of"
  },
  {
    title: "Declaring Emitted Events",
    content:
      "A component can explicitly declare the events it will emit using the defineEmits() macro:"
  }
]);
const idx = ref(0);
function toNArticle(n) {
  n %= data.length;
  idx.value = n;
}
</script>

<template>
  <div class="example example2">
    <Example2Son
      :title="data[idx].title"
      :content="data[idx].content"
      @to-n-article="toNArticle"
    />
  </div>
</template>

<style scoped lang="css">
.example2:hover::before {
  content: "2. Event Arguments";
}
</style>
