<script setup>
const props = defineProps({
  modelValue: String
});
import { ref, onMounted } from "vue";
const emit = defineEmits(["update:modelValue"]);
const customInput = ref(null);
onMounted(() => {
  if (customInput.value) {
    customInput.value.value = props.modelValue;
  }
});
function handlerInput(e) {
  emit("update:modelValue", e.target.value);
}
</script>
<template>
  <div
    :contenteditable="true"
    ref="customInput"
    class="box"
    tabindex="1"
    @input="handlerInput"
    placeholder="please enter"
    v-text="modelValue"
  ></div>
</template>

<style scoped lang="css">
.box {
  border: 1px solid #eee;
  padding: 1em;
  line-height: 22px;
  font-size: 18px;
  height: 80%;
  white-space: pre-wrap;
  overflow-y: scroll;
}
.box:empty::before {
  content: attr(placeholder);
  color: #74778a;
}
.box:focus::before {
  content: "";
}
</style>
