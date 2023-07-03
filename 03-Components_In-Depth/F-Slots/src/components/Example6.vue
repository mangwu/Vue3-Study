<script setup>
import Website2 from "./Website2.vue";
</script>

<template>
  <div class="example">
    <Website2>
      <template v-slot:header="slotProps">{{ slotProps.default }}</template>
      <template #default="slotProps">
        <p v-for="(item, index) of slotProps.default" :key="index">
          {{ item }}
        </p>
      </template>
      <template #footer="{ footer }">
        {{ footer }}
      </template>
    </Website2>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "6.1 Named Scoped Slots";
}
</style>
