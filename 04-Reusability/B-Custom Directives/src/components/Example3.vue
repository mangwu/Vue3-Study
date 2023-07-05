<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from "vue";
const value = ref("Hello");
const arg = ref("arg1");
const bindingValue = ref(null);
const vExample = {
  mounted(el, binding, _vnode, _prevNode) {
    bindingValue.value = binding;
  },
  updated(el, binding, vnode, prevNode) {
    console.log(binding.value, binding.oldValue);
    bindingValue.value.value = binding.value;
    bindingValue.value.oldValue = binding.oldValue;
  }
};
</script>

<template>
  <div class="example">
    <input type="text" v-model="value" />
    <div v-example:[arg].foo.bar="value"></div>
    <pre>{{ bindingValue }}</pre>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "4. Object Literals";
}
</style>
