<script setup lang="js">
import Example6Son from "./Example6Son.vue";
import Person from "../utils.js";
const raw = {
  propA: null,
  propB: 5,
  propC: "required",
  propD: undefined,
  propE:  {message: "vue"},
  propF: "danger",
  propG: () => "propGFunc",
  propI: new Person("mang", "wu")
}
</script>

<template>
  <div class="example example6">
    {{ raw }}
    <example6-son v-bind="raw" propH />
  </div>
</template>

<style scoped lang="css">
.example6:hover::before {
  content: "4. Prop Validation";
}
</style>
