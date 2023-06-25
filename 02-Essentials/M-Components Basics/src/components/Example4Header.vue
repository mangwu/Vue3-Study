<script setup lang="js">
import { computed } from "vue";
import Dark from "../assets/dark.svg";
import Light from "../assets/light.svg";
const props = defineProps(["theme", "fontSize"])
const emit = defineEmits(["change-theme"]);
function handlerThemeIconClick() {
  emit("change-theme")
}
const themeSrc = computed(() => {
  return props.theme === "dark" ? Dark : Light;
})
const headerStyle = computed(() => {
  return {
    height: props.fontSize + 16 + "px",
    boxShadow: props.theme === "dark" ?
      "0 4px 4px 0 rgb(65, 65, 65)"
      : "0 4px 4px 0 rgb(235, 235, 235)",
    borderColor: props.theme === "dark" ? "#444" : "#eee",
  }
})
const buttonStyle = computed(() => {
  return {
    fontSize: props.fontSize + "px",
    color: props.theme === "dark" ? "#fff" : "#000",
    background: props.theme === "dark" ? "#000" : "#fff",
    borderColor: props.theme === "dark" ? "#aaa" : "#444",
  }
})
</script>

<template>
  <div class="header" :style="headerStyle">
    <img :src="themeSrc" alt="theme" @click="handlerThemeIconClick" />
    <div class="font-size-setting">
      <button @click="$emit('change-font-size', 'sub')" :style="buttonStyle">
        smaller
      </button>
      {{ fontSize }}px
      <button @click="$emit('change-font-size', 'add')" :style="buttonStyle">
        larger
      </button>
    </div>
  </div>
</template>

<style scoped lang="css">
.header {
  box-shadow: 0 4px 4px 0 rgb(235, 235, 235);
  width: 100%;
  border-radius: 15px;
  display: flex;
  border: 1px solid gray;
  justify-content: space-around;
  align-items: center;
}

.font-size-setting {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3px;
}

img {
  width: 24px;
  height: 24px;
}

button {
  border-radius: 10px;
  border: 2px solid gray;
  padding: 2px 4px;
  cursor: pointer;
}
</style>
