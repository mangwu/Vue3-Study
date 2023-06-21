<script setup lang="js">
import { ref } from "vue";
const options = ref(["", ""]);
const picked = ref("");
const active = ref(false);
function handler() {
  active.value = true;
}
function handler2() {
  active.value = false
}
</script>

<template>
  <div class="example example7">
    <div class="options box" v-if="!active">
      <div>Please enter radio options:</div>
      <input type="text" v-model="options[0]" /><br />
      <input type="text" v-model="options[1]" /><br />
      <input type="submit" value="submit" @click="handler" />
    </div>
    <div class="picked box" v-else>
      <div>Picked: {{ picked }}</div>
      <input
        type="radio"
        name="picked7"
        id="first"
        v-model="picked"
        :value="options[0]"
      />
      <label for="first">
        {{ options[0] }}
      </label>
      <input
        type="radio"
        name="picked7"
        id="second"
        v-model="picked"
        :value="options[1]"
      />
      <label for="second">
        {{ options[1] }}
      </label>
      <button @click="handler2">back to enter options</button>
    </div>
  </div>
</template>

<style scoped lang="css">
.example7:hover::before {
  content: "2.2 Radio";
}
</style>
