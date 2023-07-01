<script setup lang="js">
import Example5Son from './Example5Son.vue';
import {reactive, ref} from "vue";
const msg1 = ref("initial value")
const msg2 = reactive({
  firstName: "mang",
  secondName: "wu",
})
</script>

<template>
  <div class="example example5">
    <label for="msg1">msg1</label>
    <input type="text" v-model="msg1" id="msg1" /><br />
    <label for="first-name">firstName</label>
    <input type="text" v-model="msg2.firstName" id="first-name" /><br />
    <label for="msg1">secondName</label>
    <input type="text" v-model="msg2.secondName" id="second-name" /><br />
    <example5-son :msg1="msg1" :msg2="msg2" />
  </div>
</template>

<style scoped lang="css">
.example5:hover::before {
  content: "3. One-Way Data Flow";
}
</style>
