<script setup>
import Dark from "../assets/dark.svg";
import Light from "../assets/light.svg";
defineOptions({
  inheritAttrs: false
});
import { useAttrs } from "vue";
const attrs = useAttrs();
console.log(attrs.class);
</script>

<template>
  <div :class="['custom-class-name', attrs.class]">
    <img :src="attrs.class === 'light' ? Light : Dark" @click="attrs.onClick" />
    <div>Hello, Vue</div>
  </div>
</template>

<style scoped lang="css">
.custom-class-name {
  font-size: 25px;
  text-align: center;
  border-radius: 5px;
}
img {
  height: 48px;
  margin-top: 10px;
}
</style>
