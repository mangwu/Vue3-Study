<script setup>
import Example4Son from './Example4Son.vue'
import { ref, computed } from 'vue'
const firstName = ref('mang')
const secondName = ref('wu')
const name = computed(() => `${firstName.value} ${secondName.value}`)
</script>

<template>
  <div class="example">
    <Example4Son
      v-model:first-name.capitalize="firstName"
      v-model:second-name.capitalize="secondName"
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
  content: '3. Handling v-model modifiers';
}
.show {
  font-size: 20px;
  color: #0e4f49;
}
</style>
