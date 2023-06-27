<script setup lang="js">
defineProps({
  title:{
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <h2>{{ title }}</h2>
  <article>{{ content }}</article>
</template>

<style scoped lang="css"></style>
