<script setup>
import { ref, onActivated, onDeactivated, onUnmounted } from "vue";
import CustomTransition from "./CustomTransition.vue";
import FancyButton from "./FancyButton.vue";
const raw = [
  "Hello, Vue",
  "Max Cached Instances",
  "Lifecycle of Cached Instance",
  "Include / Exclude"
];
const list = ref(raw.map((v) => ({ hidden: false, content: v })));
const removeClickHandler = (e, idx) => {
  list.value[idx].hidden = true;
};
const emit = defineEmits(["update-actived", "update-deactived", "update-all"]);
onActivated(() => {
  // 组件被激活
  emit("update-actived", "C");
});
onDeactivated(() => {
  // 组件失活，组件被卸载时也会调用
  emit("update-deactived", "C");
});
onUnmounted(() => {
  // 组件卸载
  emit("update-all", "C");
});
</script>

<template>
  <div>
    <h3>{{ $translate("example1.common") }} C</h3>
    <ul>
      <CustomTransition
        name="fade"
        v-for="(item, index) of list"
        :key="item.content"
      >
        <li v-if="!item.hidden">
          {{ item.content }}
          <FancyButton @click="(e) => removeClickHandler(e, index)">
            {{ $translate("common.3") }}
          </FancyButton>
        </li>
      </CustomTransition>
    </ul>
  </div>
</template>

<style scoped lang="css"></style>
