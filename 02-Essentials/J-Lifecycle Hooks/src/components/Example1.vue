<script setup lang="js">
import {onMounted,ref} from "vue";
const currentTime = Date.now();
const message = ref("")
onMounted(() => {
  console.log("the component is now mounted.");
  message.value = Date.now() - currentTime
})
</script>

<template>
  <div class="example example1">
    Example1 component initial cost {{ message }} ms.
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1. Registering Lifecycle Hooks";
}
</style>
