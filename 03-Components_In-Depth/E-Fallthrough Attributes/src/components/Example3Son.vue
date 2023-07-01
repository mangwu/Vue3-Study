<script setup>
import { computed } from "vue";
import Example3GrandSon from "./Example3GrandSon.vue";
const props = defineProps({
  title: String,
  class: String
});
const className = computed(() => {
  return props.class;
});
</script>

<template>
  <Example3GrandSon :class="className">
    {{ title }}
  </Example3GrandSon>
</template>

<style scoped lang="css"></style>
