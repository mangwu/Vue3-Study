<script setup>
defineProps({
  title: String
});
const emit = defineEmits(["update:title"]);
function handlerInput(e) {
  emit("update:title", e.target.value);
}
</script>
<template>
  <input
    class="box"
    @input="handlerInput"
    placeholder="please enter"
    :value="title"
  />
</template>

<style scoped lang="css">
.box {
  border: 1px solid #eee;
  padding: 1em;
  width: 100%;
  line-height: 22px;
  font-size: 24px;
  height: 30px;
  white-space: pre-wrap;
  overflow-y: scroll;
}
.box:empty::before {
  content: attr(placeholder);
  color: #74778a;
  transform: translateY(-4px);
}
.box:focus::before {
  content: none;
}
</style>
