<script setup>
import { reactive, ref, watch } from "vue";
import Example3Son from "./Example3Son.vue";
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
watch(idx, () => {
  console.log(idx.value);
});
function next() {
  idx.value++;
  idx.value %= data.length;
}
</script>

<template>
  <div class="example example3">
    <Example3Son
      :title="data[idx].title"
      :content="data[idx].content"
      @to-n-article="toNArticle"
      @next="next"
    />
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: "3. Declaring Emitted Events";
}
</style>
