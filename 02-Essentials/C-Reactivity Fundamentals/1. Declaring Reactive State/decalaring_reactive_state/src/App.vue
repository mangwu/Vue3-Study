<script setup>
import { reactive, nextTick } from 'vue'
const state = reactive({ count: 0 })
function increment() {
  state.count++
  // DOM 更新前
  console.log(document.querySelector('button').textContent)
  nextTick(() => {
    // DOM 更新后
    console.log(document.querySelector('button').textContent)
  })
}
</script>

<template>
  <button @click="increment">{{ state.count }}</button>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
