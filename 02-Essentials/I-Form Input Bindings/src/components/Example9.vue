<script setup lang="js">
import { ref } from "vue";
const msg = ref("");
const inputValue = ref("");
const changeValue = ref("");
function inputHandler(e) {
  inputValue.value = e.target.value;
  console.log("input handler:", `inputValue:${inputValue.value},msg:${msg.value}`);
}
function changeHander(e) {
  changeValue.value = e.target.value;
  console.log("change handler:", `changeValue:${changeValue.value},msg:${msg.value}`);
}
</script>

<template>
  <div class="example example9">
    <div>View Console Log Order</div>
    <input
      type="text"
      v-model.lazy="msg"
      @input="inputHandler"
      @change="changeHander"
    />
  </div>
</template>

<style scoped lang="css">
.example9:hover::before {
  content: "3.1 .lazy";
}
</style>
