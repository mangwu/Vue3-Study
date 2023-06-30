<script setup>
import Example3Son from "./Example3Son.vue";
import { ref, computed } from "vue";
const firstName = ref("mang");
const secondName = ref("wu");
const name = computed(() => `${firstName.value} ${secondName.value}`);
</script>

<template>
  <div class="example">
    <Example3Son
      v-model:first-name="firstName"
      v-model:second-name="secondName"
    />
    <div>
      fullname:
      <div class="show">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "2. Multiple v-model bindings";
}
.show {
  font-size: 20px;
  color: #0e4f49;
}
</style>
