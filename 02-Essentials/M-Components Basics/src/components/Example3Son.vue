<script setup lang="js">
defineProps(["title", "content"]);
</script>

<template>
  <div class="son">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped lang="css">
.son {
  box-shadow: 0 4px 4px 0 rgb(235, 235, 235), 4px 0px 4px 0 rgb(235, 235, 235);
  padding: 4px 8px;
  margin: 1em;
}
</style>