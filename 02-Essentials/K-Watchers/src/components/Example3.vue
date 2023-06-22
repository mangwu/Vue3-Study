<script setup lang="js">
import { ref, watch, reactive } from "vue";
const title1 = ref("Hello, Vue!");
const title2 = ref("Hello, Vue!");
const title3 = ref("Hello, Vue!");
const obj = reactive({
  content: {
    title: "Hello, Vue!",
  }
})

watch(obj, (newValue) => {
  title1.value = newValue.content.title;
})
watch(() => obj.content, (newValue) => {
  title2.value = newValue.title;
})
watch(() => obj.content, (newValue) => {
  title3.value = newValue.title;
}, { deep: true })
</script>

<template>
  <div class="example example3">
    <p>
      <label for="title">title:</label>
      <input type="text" v-model="obj.content.title" placeholder="title" id="title" />
    </p>
    <h3>title1(whole reactive obj): {{ title1 }}</h3>
    <h3>title2(getter): {{ title2 }}</h3>
    <h3>title3(watch with deep): {{ title3 }}</h3>
  </div>
</template>

<style scoped lang="css">
.example3:hover::before {
  content: "2. Deep Watchers";
}

input {
  width: 250px;
}

img {
  max-width: 310px;
  max-height: 190px;
}
</style>
