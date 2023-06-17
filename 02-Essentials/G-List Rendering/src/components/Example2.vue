<script setup lang="js">
import { reactive } from "vue";
const obj = reactive({
  title: "Ho to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10"
})
</script>

<template>
  <div class="example example2">
    <ul>
      <li v-for="(value, key, index) of obj" :key="index">
        {{ index }} : {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example2:hover::before {
  content: "2. v-for with an Object";
}
</style>