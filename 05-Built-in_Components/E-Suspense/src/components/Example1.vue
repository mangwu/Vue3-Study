<script setup>
const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const content = await res.json().then((value) => {
  return new Promise((resolve, reject) =>
    updateStatus(() => resolve(value), reject)
  );
});
import { ref } from "vue";

function updateStatus(resolve) {
  setTimeout(() => {
    resolve();
  }, 5000);
}
import FancyButton from "./FancyButton.vue";
const renderContent = ref(content);
const idx = ref(0);
async function clickHander() {
  idx.value++;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${idx.value}`
  );
  const content = await res.json()
  renderContent.value = content;
}
</script>

<template>
  <div class="example">
    <FancyButton @click="clickHander">next</FancyButton>
    <pre>
      {{ renderContent }}
    </pre>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "1.1 async setup()";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "1.1 async setup()";
}
</style>
