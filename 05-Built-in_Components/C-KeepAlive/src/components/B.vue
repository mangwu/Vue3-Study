<script setup>
import { ref, onActivated, onDeactivated, onUnmounted } from "vue";
const emit = defineEmits(["update-actived", "update-deactived", "update-all"]);
onActivated(() => {
  // 组件被激活
  emit("update-actived", "B");
});
onDeactivated(() => {
  // 组件失活，组件被卸载时也会调用
  emit("update-deactived", "B");
});
onUnmounted(() => {
  // 组件卸载
  emit("update-all", "B");
});
const message = ref("");

</script>

<template>
  <div>
    <h3>{{ $translate("example1.common") }} B</h3>
    <div>
      <label for="message">
        {{ $translate("example1.B.0") }} {{ message }}
      </label>
      <br />
      <input
        type="text"
        id="message"
        v-model="message"
        :placeholder="$translate('example1.B.1')"
      />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
