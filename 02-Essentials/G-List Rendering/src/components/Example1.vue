<script setup lang="js">
import { ref } from "vue";
const items = ref([{ message: "book1", id: 1 }, { message: 'book2', id: 2 }]);
const newValue = ref("");
function handler() {
  if (!newValue.value) {
    alert("please input text!")
  } else {
    items.value.push({ message: newValue.value, id: items.value.length })
    newValue.value = ""
  }
}
</script>

<template>
  <div class="example example1">
    <input type="text" name="book" id="book" v-model="newValue" />
    <input type="submit" value="add" @click="handler" />
    <ul>
      <li v-for="({ message, id }, index) of items" :key="id">
        {{ message }} - {{ index }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: '1. v-for';
}
</style>
