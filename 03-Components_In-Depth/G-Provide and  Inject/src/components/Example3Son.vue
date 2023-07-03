<script setup>
defineProps({
  firstName: String,
  secondName: String
});
const emit = defineEmits(["update:first-name", "update:second-name"]);
function handlerInput(e, type = "first-name") {
  emit(`update:${type}`, e.target.value);
}
</script>
<template>
  <input
    class="box"
    @input="(e) => handlerInput(e)"
    placeholder="please enter"
    :value="firstName"
  />
  <input
    class="box"
    @input="(e) => handlerInput(e, 'second-name')"
    placeholder="please enter"
    :value="secondName"
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
