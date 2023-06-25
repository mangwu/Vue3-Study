<script setup lang="js">
import { reactive } from "vue";
import Example3Son from "./Example3Son.vue";
const articles = reactive([{
  title: "Defining a Component",
  content: "Single-File Component (SFC for short):"
}, {
  title: "Using a Component",
  content: " using the defineProps macro:"
}])
</script>

<template>
  <div class="example example3">
    <Example3Son
      v-for="(item, index) of articles"
      :key="index"
      :title="item.title"
      :content="item.content"
    />
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: "3. Passing Props";
}
</style>
