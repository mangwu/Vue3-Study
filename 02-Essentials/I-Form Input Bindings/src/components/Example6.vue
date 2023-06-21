<script setup lang="js">
import { ref, watchEffect } from "vue";
const trueValue = ref("true-value");
const falseValue = ref("false-value");
const checkedValue = ref("false-value");
const checked = ref(false);

watchEffect(() => {
  if (checkedValue.value === falseValue.value) {
    checked.value = false;
  } else if (checkedValue.value === trueValue.value) {
    checked.value = true;
  }
  console.log(checked.value);
})
function handlerTrueInput(e) {
  trueValue.value = e.target.value;
}
function handlerFalseInput(e) {
  falseValue.value = e.target.value;
}
</script>

<template>
  <div class="example example6">
    <div class="box simple checkbox-value-binding">
      <div>checkbox-value-binding:</div>
      <input
        type="text"
        :value="trueValue"
        placeholder="enter true-value"
        @input="handlerTrueInput"
      />
      <input
        type="text"
        :value="falseValue"
        placeholder="enter false-value"
        @input="handlerFalseInput"
      />
      <input
        type="checkbox"
        id="simple6"
        v-model="checkedValue"
        :true-value="trueValue"
        :false-value="falseValue"
      />
      <label for="simple6">{{ checkedValue }}</label>
    </div>
  </div>
</template>

<style scoped lang="css">
.example6:hover::before {
  content: "2.1 Checkbox";
}
</style>
