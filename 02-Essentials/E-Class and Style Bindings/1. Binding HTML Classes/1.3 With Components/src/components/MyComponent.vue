<script setup>
import { ref, computed } from "vue";
const isActive = ref(false);
const hasError = ref(false);
const isSuccess = ref(false);
const className = computed(() => {
  return [
    {
      active: isActive.value,
      error: hasError.value,
      success: isSuccess.value,
    },
  ];
});
</script>
<template>
  <div>绑定一个返回数组的的计算属性</div>
  <input type="checkbox" id="is-active" name="isActive" v-model="isActive" />
  <label for="is-active">active</label>
  <input type="checkbox" id="has-error" name="hasError" v-model="hasError" />
  <label for="has-error">error</label>
  <input type="checkbox" id="is-success" name="isSuccess" v-model="isSuccess" />
  <label for="is-success">success</label>
  <p :class="className.concat($attrs.class)">根据状态改变类名，从而改变样式</p>
</template>
<style scoped lang="css">
.normal {
  width: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  padding: 8px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #eee;
}
.active {
  border: 2px solid #3a29d3;
}
.error {
  color: #d32929;
}
.success {
  background-color: #b1f4a4;
}
</style>
