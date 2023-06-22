<script setup lang="js">
import { ref, watch, watchEffect, watchPostEffect } from "vue";
const title = ref("initial value")
const title1 = ref("unexecuted")
const title2 = ref("unexecuted")
const title3 = ref("unexecuted")
const title4 = ref("unexecuted")
const title5 = ref("unexecuted")

const index = ref(0);
const raw = ["Hello, Vue!", "Eager Watchers", "Deep Watchers", "Watch Source Types", "watchEffect()"]
watch(index, () => {
  title.value = raw[index.value];
}, { immediate: true })
watch(index, () => {
  const node = document.querySelector("h3#title");
  if (node) {
    title1.value = node.textContent;
  } else {
    title1.value = "Cannot get h3#title"
  }
})
watch(index, () => {
  const node = document.querySelector("h3#title");
  if (node) {
    title2.value = node.textContent;
  } else {
    title2.value = "Cannot get h3#title"
  }
}, { flush: 'post' })
watchEffect(() => {
  console.log(index.value);
  const node = document.querySelector("h3#title");
  if (node) {
    title3.value = node.textContent;
  } else {
    title3.value = "Cannot get h3#title"
  }
},)
watchEffect(() => {
  console.log(index.value);
  const node = document.querySelector("h3#title");
  if (node) {
    title4.value = node.textContent;
  } else {
    title4.value = "Cannot get h3#title"
  }
}, { flush: 'post' })
watchPostEffect(() => {
  console.log(index.value);
  const node = document.querySelector("h3#title");
  if (node) {
    title5.value = node.textContent;
  } else {
    title5.value = "Cannot get h3#title"
  }
})

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
  <div class="example example6">
    <h3 id="title"> {{ title }}</h3>
    <button @click="(e) => handler(e, 'less')">&lt;</button>
    {{ index }}
    <button @click="(e) => handler(e, 'add')">&gt;</button>
    <p>watch without { flush: 'post' }: <span>{{ title1 }}</span></p>
    <p>watch with { flush: 'post' }: <span>{{ title2 }}</span></p>
    <p>watchEffect without { flush: 'post' }: <span>{{ title3 }}</span></p>
    <p>watchEffect with { flush: 'post' }: <span>{{ title4 }}</span></p>
    <p>watchPostEffect: <span>{{ title5 }}</span></p>
  </div>
</template>

<style scoped lang="css">
.example6:hover::before {
  content: "6. Callback Flush Timing";
}
p{
  border: 1px solid rgb(198, 198, 198);
  padding: 1px 2px;
  border-radius: 4px;
}
</style>
