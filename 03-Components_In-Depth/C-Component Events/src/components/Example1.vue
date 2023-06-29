<script setup>
import { reactive, ref } from "vue";
import Example1Son from "./Example1Son.vue";
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
function nextArticle() {
  idx.value++;
  idx.value %= data.length;
}
</script>

<template>
  <div class="example example1">
    <Example1Son
      :title="data[idx].title"
      :content="data[idx].content"
      @next-article="nextArticle"
    />
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1. Emitting and Listening to Events";
}
</style>
