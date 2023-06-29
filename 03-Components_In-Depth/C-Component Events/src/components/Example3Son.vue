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
const emit = defineEmits({
  toNArticle(payload) {
    if (payload < 0) {
      alert("请输入大于0的数据");
      return false;
    }
    return true;
  },
  next() {
    return true;
  }
});
const num = ref(0);
function toNArticle() {
  emit("toNArticle", num.value);
}
function next() {
  emit("next");
}
</script>

<template>
  <input type="number" id="num" v-model="num" min="0" />
  <button @click="toNArticle">to {{ num }}</button>
  <button @click="next">next</button>

  <h2>{{ title }}</h2>
  <article>{{ content }}</article>
</template>

<style scoped lang="css"></style>
