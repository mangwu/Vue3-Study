<script setup lang="js">
import { ref, reactive } from "vue";
const checked = ref(false);
const checkedList = reactive([false, false]);
const checkedName = ref(new Set(["Mang"]));
</script>

<template>
  <div class="example example3">
    <div class="simple box">
      <input type="checkbox" id="simple" v-model="checked" />
      <label for="simple">simple checkbox: {{ checked }}</label>
    </div>
    <div class="multil-checkbox box">
      <div>checked-list: {{ checkedList }}</div>
      <input type="checkbox" id="multil-1" v-model="checkedList[0]" />
      <label for="multil-1">multil-1</label>
      <input type="checkbox" id="multil-2" v-model="checkedList[1]" />
      <label for="multil-2">multil-1</label>
    </div>
    <div class="multil-checkbox-value box">
      <div>checked-name: {{ checkedName }}</div>
      <input type="checkbox" id="mang" value="Mang" v-model="checkedName" />
      <label for="mang">Mang</label>
      <input type="checkbox" id="Wu" value="Wu" v-model="checkedName" />
      <label for="Wu">Wu</label>
    </div>
  </div>
</template>

<style lang="css">
.example3:hover::before {
  content: "1.3 Checkbox";
}

label {
  display: inline-block;
  height: 20px;
  line-height: 20px;
}

input {
  height: 20px;
  vertical-align: middle;
}

.box {
  border: 1px solid rgb(182, 182, 182);
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 4px;
}

.box:hover {
  box-shadow: 0 2px 2px 1px rgb(241, 241, 241),
    2px 0px 2px 1px rgb(241, 241, 241);
}</style>
