<script setup lang="js">
import {ref} from "vue";
const message = ref("");
</script>

<template>
  <div class="example example1">
    <p>Message is: {{ message }}</p>
    <input
      type="text"
      v-model="message"
      name="message"
      placeholder="edit me"
    />
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1.1 v-model Text";
}
</style>
