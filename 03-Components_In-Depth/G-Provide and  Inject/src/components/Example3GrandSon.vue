<script setup>
import { inject } from "vue";
const msg = inject("msg");
const setMsg = inject("setMsg");
const count = inject("read-only-count");
console.log(count);
function inputHandler(e) {
  setMsg(e.target.value);
}
function inputHandler2(e) {
  count.value = e.target.value;
}
</script>
<template>
  <div class="grand-son">
    State to grand child: <br />
    <label for="msg">msg: </label>
    <input type="text" :value="msg" @input="inputHandler" id="msg" /> <br />
    <label for="count">read-only-count: </label>
    <input type="number" :value="count" @input="inputHandler2" id="count" />
  </div>
</template>

<style scoped lang="css">
.grand-son {
  border: 1px solid var(--color-border);
  padding: 0.3em;
}
span {
  font-weight: 600;
}
input{
  width: 120px;
}
</style>
