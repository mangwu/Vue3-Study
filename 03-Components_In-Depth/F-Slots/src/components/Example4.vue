<script setup>
import { reactive } from "vue";
import Website from "./Website.vue";
const website = reactive({
  header: "Named Slots",
  main: [`A <slot> outlet without name implicitly has the name "default".`],
  footer: "@copyright © 2023 wangzhihao, All rights reserved."
});
const locations = reactive(["header", "default", "footer"]);
function getLocation(idx) {
  return locations[idx];
}
function handlerExchange(_e, index) {
  [locations[index], locations[index + 1]] = [
    locations[index + 1],
    locations[index]
  ];
}
</script>

<template>
  <div class="example">
    <div class="wrapper">
      <Website class="custom-website">
        <template v-slot:[getLocation(0)]>{{ website.header }}</template>
        <template #[getLocation(1)]>
          <p v-for="(item, index) of website.main" :key="index">{{ item }}</p>
        </template>
        <template #[getLocation(2)]>
          {{ website.footer }}
        </template>
      </Website>
      <div class="action">
        <div v-for="(item, index) of locations" :key="index">
          <div class="slot-name">{{ item }}</div>
          <div
            class="exchange"
            v-if="index !== locations.length - 1"
            @click="(e) => handlerExchange(e, index)"
          >
            ↕
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "5. Dynamic Slot Names";
}
.wrapper {
  display: flex;
  gap: 5px;
  height: 94%;
  justify-content: space-evenly;
  align-items: center;
}
.custom-website {
  height: 100%;
  width: 78%;
}
.exchange {
  text-align: center;
  font-size: 20px;
}
.exchange:hover {
  color: rgb(0, 128, 255);
  scale: 1.1;
  font-weight: 600;
}
.slot-name {
  border: 1px solid #eee;
  padding: 2px;
  border-radius: 4px;
}
</style>
