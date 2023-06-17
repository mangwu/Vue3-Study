<script setup lang="js">
import { reactive } from "vue";
const todos = reactive([
  { title: "奶茶", isCompeted: false },
  { title: "撒谎", isCompeted: true },
  { title: "爱吃", isCompeted: false },
  { title: "函数", isCompeted: false },
]);
</script>

<template>
  <div class="example example5">
    Have done it before:
    <template v-for="({ title }, index) of todos" :key="index">
      <input type="checkbox" v-model="todos[index].isCompeted" :id="title" />
      <label :for="title">{{ title }}</label>
    </template>
    <ul>
      <template v-for="({ title, isCompeted }, index) of todos" :key="index">
        <li v-if="!isCompeted">
          <span>{{ title }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example5:hover::before {
  content: '5. v-for with v-if';
}
label {
  cursor: pointer;
}
</style>
