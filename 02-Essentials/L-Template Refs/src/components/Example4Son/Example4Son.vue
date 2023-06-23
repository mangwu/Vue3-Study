<script setup lang="js">
import { ref } from "vue";
const value = ref("inital value");
defineExpose({
  value,
})
</script>

<template>
  <div class="son">
    <div>I'm som components</div>
    <div>Ref value "{{ value }}" is exposed to Parent Component!</div>
  </div>
</template>

<style scoped lang="css">
.son {
  border: 1px solid rgb(204, 204, 204);
  padding: 4px 8px;
  box-shadow: 0 2px 3px 1px rgb(234, 234, 234), 2px 0 3px 1px rgb(223, 223, 223);
}
</style>