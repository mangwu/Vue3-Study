<script setup>
import { ref } from "vue";
import FancyButton from "./FancyButton.vue";
const count = ref(0);
</script>

<template>
  <div>
    <h3>{{ $translate("example1.common") }} A</h3>
    <div>
      {{ $translate("example1.A") }} {{ count }}
      <FancyButton @click="count++">+</FancyButton>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
