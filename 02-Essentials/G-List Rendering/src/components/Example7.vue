<script setup lang="js">
import { ref } from "vue";
const raw = [
  "Mutation methods",
  "mutate the original array they are called on",
  "In comparison",
  "there are also non-mutating methods",
  "e.g. filter(), concat() and slice()",
  "working with non-mutating methods",
  "we should replace the old array with the new one",
]
const infos = ref(raw);
const searchText = ref("");
function search() {
  infos.value = raw.filter((value) => value.indexOf(searchText.value) !== -1);
}
</script>

<template>
  <div class="example example7">
    <div class="search">
      <input type="text" v-model="searchText" />
      <button @click="search">search</button>
    </div>
    <ul>
      <li v-for="(item, index) of infos" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example7:hover::before {
  content:"8.2 Replacing an Array"
}
</style>
