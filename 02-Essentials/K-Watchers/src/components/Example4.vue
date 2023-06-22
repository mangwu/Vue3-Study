<script setup lang="js">
import { ref, watch  } from "vue";
const title = ref("")
const index = ref(0);
const raw = ["Hello, Vue!", "Eager Watchers", "Deep Watchers", "Watch Source Types", "watchEffect()"]
watch(index, () => {
  title.value = raw[index.value];
}, { immediate: true })
function handler(e, type = "add") {
  if (type === "add") {
    index.value++;
  } else {
    index.value += raw.length - 1;
  }
  index.value %= raw.length;
}
</script>

<template>
  <div class="example example4">
    <h3> {{ title }}</h3>
    <button @click="(e) => handler(e, 'less')">&lt;</button>
    {{ index }}
    <button @click="(e) => handler(e, 'add')">&gt;</button>
  </div>
</template>

<style scoped lang="css">
.example4:hover::before {
  content: "3. Eager Watchers";
}
</style>
