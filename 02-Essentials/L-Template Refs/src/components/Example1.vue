<script setup lang="js">
import { ref, watchEffect, onMounted } from "vue";

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null);
const parent = ref(null)

onMounted(() => {
  input.value.focus();
})

watchEffect(() => {
  console.log(input.value);
  if(input.value) {
    input.value.focus();
  }
})

function reset() {
  parent.value.removeChild(input.value);
  const newNode = document.createElement("input");
  newNode.setAttribute("type", "text");
  newNode.setAttribute("placeholder", "auto focus");
  parent.value.appendChild(newNode);
  input.value = newNode;
}


</script>

<template>
  <div class="example example1">
    <div ref="parent">
      <input type="text" ref="input" placeholder="auto focus" />
    </div>
    <button @click="reset">reset</button>
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1. Accessing the Refs";
}

input {
  width: 250px;
}
</style>
