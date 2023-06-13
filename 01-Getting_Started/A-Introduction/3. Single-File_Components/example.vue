<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button @click="this.count++">Count is: {{ this.count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
