<script setup lang="js">
import { ref, watch, reactive } from "vue";
const x = ref(1);
const y = ref(2);
const res = reactive({
  sum: 3,
  product: 2,
  rate: 2
})
function computeValue() {
  res.sum = x.value + y.value;
  res.product = x.value * y.value;
  res.rate = x.value / y.value;
}
watch([x, y], () => {
  computeValue();
})
watch([() => res.rate,() => res.sum], ([newRate, newSum]) => {
  res.rate = Math.floor(newRate);
  console.log(newSum);
})
</script>

<template>
  <div class="example example2">
    <p>
      <label for="x">x:</label>
      <input type="number" v-model="x" placeholder="x" id="x" />
    </p>
    <p>
      <label for="">y:</label>
      <input type="number" v-model="y" placeholder="y" id="y" />
    </p>
    <p>{{ res }}</p>
  </div>
</template>

<style scoped lang="css">
.example2:hover::before {
  content: "1.1 Watch Source Types";
}

input {
  width: 250px;
}

img {
  max-width: 310px;
  max-height: 190px;
}
</style>
