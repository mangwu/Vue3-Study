<script setup>
import A from "./A.vue";
import B from "./B.vue";
import { ref } from "vue";
const picked = ref("A");
</script>

<template>
  <div class="example">
    <div class="picked">
      <input type="radio" id="A" value="A" v-model="picked" />
      <label for="A">A</label>
      <input type="radio" id="B" value="B" v-model="picked" />
      <label for="B">B</label>
    </div>

    <div class="wrapper">
      <KeepAlive>
        <component :is="picked === 'A' ? A : B"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "1. Basic Usage";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "1. 基本使用";
}
.wrapper {
  background-color: var(--color-background-0);
  padding: 6px;
  border-radius: 4px;
}
.picked {
  display: flex;
  gap: 8px;
  cursor: pointer;
}
</style>
