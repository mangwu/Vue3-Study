<script setup lang="js">
import { reactive } from "vue";
const articles = reactive([{
  title: "Defining a Component",
  content: "Single-File Component (SFC for short):"
},{
  title:"Using a Component",
  content
}])
</script>

<template>
  <div class="example example2">
    <input type="text" :ref="getInputValue" placeholder="auto focus" value="inital value" />
    <p>Obtained input value by reference: {{ message }}</p>
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: "3. Function Refs";
}
</style>
