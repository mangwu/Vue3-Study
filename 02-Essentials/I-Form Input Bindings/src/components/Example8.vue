<script setup lang="js">
import { ref } from "vue";
const options = ref([
  { number: 123, },
  { number: 456, },
  { number: 789, }
]);
const selected8 = ref("");

</script>

<template>
  <div class="example example8">
    <div class="title">Selected: {{ selected8 }}</div>
    <select name="selected8" id="selected8" v-model="selected8">
      <option
        v-for="(item, index) of options"
        :key="index"
        :value="item"
      >
        {{ item.number }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="css">
.example8:hover::before {
  content: "2.3 Select Options";
}
select {
  width: 150px;
}
</style>
