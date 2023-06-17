<script setup lang="js">
import TodoItem from "./TodoItem.vue";
import { reactive, ref } from "vue";
const todos = reactive([
  "Do the dishes",
  "Take out the trash",
  "Mow the lawn",
])
const newTodo = ref("")
function handler(e, type = "add", index = todos.length) {
  if (type === "add") {
    if (!newTodo.value) {
      alert("please enter new todo")
      return;
    }
    todos.push(newTodo.value)
    newTodo.value = ""
  } else if (type === "remove") {
    todos.splice(index, 1);
  }
}
</script>

<template>
  <div class="example example6">
    <div class="add-action">
      <label for="add">Add a todo</label>
      <input
        type="text"
        name="add"
        id="add"
        placeholder="E.g. Feed the cat"
        v-model="newTodo"
      />
      <button @click="handler">Add</button>
    </div>
    <ul>
      <TodoItem
        v-for="(item, index) of todos"
        :todo="item"
        :key="index"
        @remove="(e) => handler(e, 'remove', index)"
      />
    </ul>
  </div>
</template>

<style scoped lang="css">
.example6:hover::before {
  content: '7. v-for with a Component';
}
</style>
