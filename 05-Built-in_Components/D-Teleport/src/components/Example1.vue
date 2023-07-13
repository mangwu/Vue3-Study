<script setup>
import Modal from "./Modal.vue";
import FancyButton from "./FancyButton.vue";
import { ref } from "vue";
const show = ref(false);
const open = ref(false);
function close() {
  open.value = false;
}
const open2 = ref(false);
function close2() {
  open2.value = false;
  setTimeout(() => {
    // 动画时间
    show.value = false;
  }, 300);
}
function openModal() {
  open.value = true;
}
function openModal2() {
  open2.value = true;
}
</script>

<template>
  <div class="example">
    <FancyButton @click="openModal">
      {{ $translate("example1.btn.0") }}
    </FancyButton>
    <FancyButton @click="openModal2">
      {{ $translate("example1.btn.1") }}
    </FancyButton>

    <Modal :open="open" @close="close" :mask="false" />
    <Modal :open="open2" @close="close2" :keyboard="true">
      <template v-slot:header>
        {{ $translate("example1.content.0") }}
      </template>
      <template v-slot:body>
        <div v-if="show">
          {{ $translate("example1.content.1") }}
        </div>
        <FancyButton v-if="!show" @click="show = true">
          {{ $translate("example1.content.2") }}
        </FancyButton>
      </template>
      <template #footer>
        <div></div>
      </template>
    </Modal>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "1. Basic Usage";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "1. 基本用法";
}
</style>
