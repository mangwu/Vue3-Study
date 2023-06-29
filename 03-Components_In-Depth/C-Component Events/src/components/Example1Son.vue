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
defineEmits(["nextArticle"]);

</script>

<template>
  <button @click="$emit('nextArticle')">next</button>
  <h2>{{ title }}</h2>
  <article>{{ content }}</article>
</template>

<style scoped lang="css"></style>
