<script setup lang="js">
import { ref, watch, onMounted } from "vue";
import Example4Son from "./Example4Son/Example4Son.vue";
const sonValue = ref(null)
const inputValue = ref("");

onMounted(() => {
  inputValue.value = sonValue.value.value
})

watch(inputValue, () => {
  sonValue.value.value = inputValue.value
})


</script>

<template>
  <div class="example example4">
    <h2>son component:</h2>
    <Example4Son ref="sonValue" />
    <input type="text" v-model="inputValue">
  </div>
</template>

<style scoped lang="css">
.example4:hover::before {
  content: "4. Ref on Component";
}
</style>
