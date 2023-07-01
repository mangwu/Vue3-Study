<script setup lang="js">
const props = defineProps({
  msg1: String,
  msg2: Object,
});
import {computed, ref} from "vue";
const myMsg = ref(props.msg1);
const name = computed(() => props.msg2.firstName + " " + props.msg2.secondName);
</script>

<template>
  <div class="box">
    <label for="my-msg">myMsg</label>
    <input type="text" v-model="myMsg" id="my-msg" /><br />
    <label for="full-name">fullName:</label>
    {{ name }}
  </div>
</template>

<style scoped lang="css">
.box {
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 1em;
  box-shadow: 2px 0 2px 0 #ddd, 0 2px 2px 0 #ddd;
  margin-top: 1em;
}
</style>
