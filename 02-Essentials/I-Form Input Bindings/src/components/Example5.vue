<script setup lang="js">
import {ref} from "vue";
const selected = ref("");
const selecteds = ref([]);
const selectedFromOptions = ref("apple");
const options = [
  {label: "A", value:"apple"},
  {label: "B", value:"banana"},
  {label: "C", value:"cherry"},
]
</script>

<template>
  <div class="example example5">
    <div class="simple box">
      <div>Simple Selected: {{ selected }}</div>
      <select name="selected" id="selected" v-model="selected">
        <option value="" disabled>Please select one</option>
        <option value="apple">A</option>
        <option value="banana">B</option>
        <option value="cherry">C</option>
      </select>
    </div>
    <div class="mutil-select box">
      <div>Mutil Selected: {{ selecteds }}</div>
      <select name="selecteds" id="selecteds" v-model="selecteds" multiple>
        <option value="apple">A</option>
        <option value="banana">B</option>
        <option value="cherry">C</option>
      </select>
    </div>
    <div class="with-v-for box">
      <div>With v-for Selected: {{ selectedFromOptions }}</div>
      <select
        name="selectedFromOptions"
        id="selectedFromOptions"
        v-model="selectedFromOptions"
      >
        <option v-for="item of options" :key="item.value" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped lang="css">
.example5:hover::before {
  content: "1.5 Select";
}
select {
  width: 150px;
}
</style>
