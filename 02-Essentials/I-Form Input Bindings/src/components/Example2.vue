<script setup lang="js">
import {ref} from "vue";
const message = ref("");
const interpolation = ref("插值")
function handler(e) {
  interpolation.value = e.target.value;
}
</script>

<template>
  <div class="example example2">
    <p>Message is: {{ message }}</p>
    <textarea
      type="text"
      v-model="message"
      name="message"
      placeholder="add multiple lines"
      cols="30"
      rows="5"
    ></textarea>
    <textarea id="" cols="30" rows="5" @input="handler">{{
      interpolation
    }}</textarea>
  </div>
</template>

<style scoped lang="css">
.example2:hover::before {
  content: "1.2 v-model Multiline text";
}
</style>
