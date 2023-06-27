<script setup lang="js">
import { ref } from "vue";
const sonMsg = ref("Son Components");
</script>

<template>
  <div class="son">
    {{ sonMsg }}
  </div>
</template>

<style scoped lang="css">
.son {
  box-shadow: 0 4px 4px 0 rgb(235, 235, 235), 4px 0px 4px 0 rgb(235, 235, 235);
  padding: 4px 8px;
  margin: 1em;
}
</style>