<script setup>
import { inject } from "vue";
const msg = inject("msg");
</script>

<template>
  <div class="example">{{ msg }}</div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "1. Introduction";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "1. 介绍";
}
</style>
