<script setup lang="js">
const props = defineProps(["title", "content","theme"]);
import {computed} from "vue";
const sonStyle = computed(() => {
  return {
    boxShadow: props.theme === "dark" ?
      "0 4px 4px 0 rgb(65, 65, 65),4px 0px 4px 0 rgb(65, 65, 65)"
      : "0 4px 4px 0 rgb(235, 235, 235),4px 0px 4px 0 rgb(235, 235, 235)",
  }
})
</script>

<template>
  <div class="son" :style="sonStyle">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped lang="css">
.son {
  box-shadow: 0 4px 4px 0 rgb(235, 235, 235), 4px 0px 4px 0 rgb(235, 235, 235);
  padding: 4px 8px;
  margin: 8px;
}
</style>
