<script setup>
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
import { ref } from "vue";
const picked = ref("A");
const raw = {
  A,
  B,
  C
};
function getCpn() {
  return raw[picked.value];
}
</script>

<template>
  <div class="example">
    <div class="picked">
      <input type="radio" id="A3" value="A" v-model="picked" />
      <label for="A3">A</label>
      <input type="radio" id="B3" value="B" v-model="picked" />
      <label for="B3">B</label>
      <input type="radio" id="C3" value="C" v-model="picked" />
      <label for="C3">C</label>
    </div>

    <div class="wrapper">
      <div class="title">{{ $translate("example3") }}</div>
      <KeepAlive max="2">
        <component :is="getCpn()"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "3. 最大缓存实例数";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "3. Max Cached Instances";
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
