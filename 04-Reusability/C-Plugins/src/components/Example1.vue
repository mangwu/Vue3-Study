<script setup>
const vFocus = {
  mounted: (el) => el.focus()
};
</script>

<template>
  <div class="example">
    <input type="text" v-focus placeholder="This should be focused" />
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "1. Introduction";
}
.wrapper {
  border: 1px solid var(--color-border);
  padding: 1em;
}
</style>
