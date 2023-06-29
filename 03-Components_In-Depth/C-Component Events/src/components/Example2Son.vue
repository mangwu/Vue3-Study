<script setup>
import { ref } from "vue";
defineProps({
  title: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String
  }
});
defineEmits(["toNArticle"]);
const num = ref(0);
</script>

<template>
  <input type="number" id="num" v-model="num" min="0" />
  <button @click="$emit('toNArticle', num)">to {{ num }}</button>
  <h2>{{ title }}</h2>
  <article>{{ content }}</article>
</template>

<style scoped lang="css"></style>
