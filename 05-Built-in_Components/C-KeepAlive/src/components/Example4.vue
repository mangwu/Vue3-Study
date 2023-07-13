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
const actived = ref([]);
const deactived = ref([]);
function updateActivedHandler(cpnName) {
  actived.value.push(cpnName);
  const idx = deactived.value.indexOf(cpnName);
  idx !== -1 && deactived.value.splice(idx, 1);
}
function updateDeactivedHandler(cpnName) {
  deactived.value.push(cpnName);
  const idx = actived.value.indexOf(cpnName);
  idx !== -1 && actived.value.splice(idx, 1);
}
function updateAllHandler(cpnName) {
  const idx = actived.value.indexOf(cpnName);
  idx !== -1 && actived.value.splice(idx, 1);
  const idx2 = deactived.value.indexOf(cpnName);
  idx2 !== -1 && deactived.value.splice(idx2, 1);
}
</script>

<template>
  <div class="example">
    <div class="outer-wrapper">
      <div class="picked">
        <input type="radio" id="A4" value="A" v-model="picked" />
        <label for="A4">A</label>
        <input type="radio" id="B4" value="B" v-model="picked" />
        <label for="B4">B</label>
        <input type="radio" id="C4" value="C" v-model="picked" />
        <label for="C4">C</label>
      </div>

      <div class="wrapper">
        <div class="title">{{ $translate("example3") }}</div>
        <KeepAlive max="2">
          <component
            :is="getCpn()"
            @update-actived="updateActivedHandler"
            @update-deactived="updateDeactivedHandler"
            @update-all="updateAllHandler"
          ></component>
        </KeepAlive>
      </div>
      <div>
        {{ $translate("example4.0") }} {{ actived }},
        {{ $translate("example4.1") }} {{ deactived }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "4. 缓存实例的生命周期";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "4. Lifecycle of Cached Instance";
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
.outer-wrapper {
  height: 100%;
  overflow: auto;
}
.title {
  color: var(--color-primary-2);
  font-weight: 600;
}
</style>
