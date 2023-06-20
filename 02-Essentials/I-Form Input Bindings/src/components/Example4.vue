<script setup lang="js">
import {ref} from "vue";
const picked = ref("one");
</script>

<template>
  <div class="example example4">
    <div>Picked: {{ picked }}</div>
    <input type="radio" name="picked" id="one" value="one" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" name="picked" id="two" value="two" v-model="picked" />
    <label for="two">Two</label>
  </div>
</template>

<style scoped lang="css">
.example4:hover::before {
  content: "1.4 Radio";
}
</style>
