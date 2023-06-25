<script setup lang="js">
import { onUnmounted, reactive, ref, watchEffect } from "vue";
const todoId = ref(1);
const content = reactive({
  title: "",
  completed: false,
  userId: 0,
})
const unwatch = watchEffect(async () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`).then((res) => {
    return res.json();
  }).then((res) => {
    content.title = res.title;
    content.completed = res.completed;
    content.userId = res.userId;
  }).catch((err) => {
    content.title = "Error! Could not reach the API." + err;
    content.userId = 0;
  })
})

onUnmounted(() => {
  unwatch();
})

function handler(e, type = "add") {
  if (type === "add") {
    todoId.value++;
  } else {
    todoId.value--;
  }
}
</script>

<template>
  <div class="example example7">
    <button @click="(e) => handler(e, 'less')" :disabled="todoId === 1">pre</button>
    <button @click="(e) => handler(e, 'add')" :disabled="todoId === 200">next</button>
    <div class="content">
      <p>todoId:
        {{ todoId }}
      </p>
      <p>author: {{ content.userId }}</p>
      <p>completed: <input type="checkbox" name="" id="" :checked="content.completed" /> </p>
      <h2>{{ content.title }}</h2>
    </div>
  </div>
</template>

<style scoped lang="css">
.example7:hover::before {
  content: "7. Stopping a Watcher";
}
</style>