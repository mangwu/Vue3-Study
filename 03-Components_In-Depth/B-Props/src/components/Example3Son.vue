<script setup lang="js">
defineProps({
  str:{
    required: true,
    type: String,
  },
  num: {
    required: true,
    type: Number,
  },
  boo: {
    required:true,
    type: Boolean,
  },
  arr: {
    required: true,
    type: Array,
  },
  obj: {
    required: true,
    type: Object,
  }
});
</script>

<template>
  <p>str: {{ str }}</p>
  <p>num: {{ num }}</p>
  <p>boo: {{ boo }}</p>
  <p>arr: {{ arr }}</p>
  <p>obj: {{ obj }}</p>
</template>

<style scoped lang="css"></style>
