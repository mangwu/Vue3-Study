<script setup>
import A from "./A.vue";
import B from "./B.vue";
import { ref } from "vue";
const picked = ref("A");
</script>

<template>
  <div class="example">
    <div class="picked">
      <input type="radio" id="A2" value="A" v-model="picked" />
      <label for="A2">A</label>
      <input type="radio" id="B2" value="B" v-model="picked" />
      <label for="B2">B</label>
    </div>

    <div class="wrapper">
      <div class="title">{{ $translate("example2") }}</div>
      <KeepAlive include="A">
        <component :is="picked === 'A' ? A : B"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2. Include / Exclude";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2. 包含/排除";
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
.title {
  color: var(--color-primary-2);
  font-weight: 600;
}
</style>
