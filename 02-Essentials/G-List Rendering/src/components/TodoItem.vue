<script setup lang="js">
defineProps(["todo","index"]);
defineEmits(["remove"])
</script>

<template>
  <li>
    {{ todo }}
    <button @click="$emit('remove')">remove</button>
  </li>
</template>

<style scoped lang="css"></style>
