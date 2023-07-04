<script setup>
import useFetch from "../composables/useFetch";
import FancyButton from "./FancyButton.vue";
import Loading from "./Loading.vue";
import { ref, computed } from "vue";
const todoId = ref(1);
const url = computed(
  () => `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
);
const { data, error } = useFetch(url);
function clickHandler(_e, type = "add") {
  type === "add" ? todoId.value++ : todoId.value--;
}
</script>

<template>
  <div class="example">
    <div class="modefy-todo-id">
      <FancyButton @click="(e) => clickHandler(e, 'less')"> &lt; </FancyButton>
      {{ todoId }}
      <FancyButton @click="clickHandler"> &gt; </FancyButton>
    </div>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data" class="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else><Loading />Loading...</div>
  </div>
</template>

<style scoped lang="css">
.data {
  overflow: hidden;
}
</style>
