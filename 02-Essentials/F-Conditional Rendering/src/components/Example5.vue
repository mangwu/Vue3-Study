<script setup lang="js">
import {ref} from "vue";
const hasAwesome = ref(false);
function handler() {
  hasAwesome.value = !hasAwesome.value
}
</script>

<template>
  <div class="example example5">
    <button class="toogle" @click="handler">
      hasAwesome: {{ hasAwesome }}
    </button>
    <div>&lt;h1&gt;'s "display" style is "{{ hasAwesome ? "" : "none" }}"</div>
    <h1 v-show="hasAwesome">Vue is awsome!😋</h1>
  </div>
</template>

<style scoped lang="css">
.example5:hover::before {
  content: "5. v-show";
}
</style>
