<script setup>
import { ref, onActivated, onDeactivated, onUnmounted } from "vue";
import FancyButton from "./FancyButton.vue";
const emit = defineEmits(["update-actived", "update-deactived", "update-all"]);
onActivated(() => {
  // 组件被激活
  emit("update-actived", "A");
});
onDeactivated(() => {
  // 组件失活，组件被卸载时也会调用
  emit("update-deactived", "A");
});
onUnmounted(() => {
  // 组件卸载
  emit("update-all", "A");
});
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
