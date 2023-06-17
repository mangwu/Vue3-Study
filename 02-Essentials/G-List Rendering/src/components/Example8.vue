<script setup lang="js">
import { ref, computed } from "vue";
const data = ref([
  [1, 8, 6, 1, 4, 5, 1, 6],
  [1, 3, 6, 2, 4, 5, 3, 2, 4],
  [3, 5, 8, 6, 4, 7, 6, 8],
  [1, 1, 2, 8, 9, 1, 7, 1, 3],
  [1, 4, 7, 5, 6, 7, 2, 4, 1, 5]
]);
const sumSorted = computed(() => {
  return JSON.parse(JSON.stringify(data.value)).sort(
    (a, b) => a.reduce((pre, cur) => pre + cur) - b.reduce((pre, cur) => pre + cur)
  )
})
function even(arr) {
  return arr.filter((value) => value % 2 === 0).sort((a, b) => a - b);
}
</script>

<template>
  <div class="example example8">
    <div>Original data: {{ data }}</div>
    <div>After Filtered and Sorted:</div>
    <ul>
      <li v-for="(item1, index1) of sumSorted" :key="index1">
        <span v-for="(item2, index2) of even(item1)" :key="index2">
          {{ item2 }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example8:hover::before {
  content: '9. Displaying Filtered/Sorted Results';
}

li {
  display: flex;
}

span {
  width: 32px;
}
</style>
