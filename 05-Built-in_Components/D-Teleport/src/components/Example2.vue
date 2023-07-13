<script setup>
import Modal from "./Modal.vue";
import FancyButton from "./FancyButton.vue";
import { ref, watch } from "vue";
import useWindowSize from "../composables/useWindowSize.js";
const open = ref(false);
function close() {
  open.value = false;
}
function openModal() {
  open.value = true;
}
const disabled = ref(false);
const size = useWindowSize();
watch(
  [() => size.value.width, () => size.value.height],
  () => {
    const { width, height } = size.value;
    console.log(width, height);
    if (width * height < 500000) {
      disabled.value = true;
    } else {
      disabled.value = false;
    }
  },
  { immediate: true, flush: "post" }
);
</script>

<template>
  <div class="example">
    <FancyButton @click="openModal">
      {{ $translate("example1.btn.0") }}
    </FancyButton>

    <Modal
      :open="open"
      @close="close"
      :keyboard="true"
      :disabled="disabled"
      :mask="false"
    >
      <template v-slot:header>
        {{ $translate("example1.content.0") }}
      </template>
      <template v-slot:body> </template>
      <template #footer> </template>
    </Modal>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "3. Disabling Teleport";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "3. 禁用 Teleport";
}
.example {
  position: relative;
}
</style>
