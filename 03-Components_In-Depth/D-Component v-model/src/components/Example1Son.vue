<script setup>
defineProps({
  modelValue: String
});
const emit = defineEmits(["update:modelValue"]);
function handlerInput(e) {
  console.log(e.target.innerText);
  console.log(e.target.textContent);
  emit("update:modelValue", e.target.innerText);
}
</script>
<template>
  <div :contenteditable="true" class="box" @input="handlerInput">
    {{ modelValue }}
  </div>
</template>

<style scoped lang="css">
.box {
  border: 1px solid #eee;
  padding: 1em;
  line-height: 22px;
  font-size: 18px;
  height: 80%;
  white-space: pre-wrap;
}
</style>
