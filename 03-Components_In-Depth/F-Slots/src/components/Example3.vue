<script setup>
import { reactive } from "vue";
import Website from "./Website.vue";
const website = reactive({
  header: "Named Slots",
  main: [
    "There are times when it's useful to have multiple slot outlets in a single component",
    `For these cases, the <slot> element has a special attribute, name, can determine`,
    `A <slot> outlet without name implicitly has the name "default".`
  ],
  footer: "@copyright © 2023 wangzhihao, All rights reserved."
});
</script>

<template>
  <div class="example">
    <Website>
      <template v-slot:header>{{ website.header }}</template>
      <p v-for="(item, index) of website.main" :key="index">{{ item }}</p>
      <template #footer>
        {{ website.footer }}
      </template>
    </Website>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "4. Named Slots";
}
</style>
