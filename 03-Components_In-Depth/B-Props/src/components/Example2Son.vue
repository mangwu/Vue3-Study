<script setup lang="js">
defineProps({
  title:{
    required: true,
    type: String,
  },
  articleContent: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <h2>{{ title }}</h2>
  <article>{{ articleContent }}</article>
</template>

<style scoped lang="css"></style>
