<script setup>
import { ref } from "vue";
const message = ref("");
</script>

<template>
  <div>
    <h3>{{ $translate("example1.common") }} B</h3>
    <div>
      <label for="message">
        {{ $translate("example1.B.0") }} {{ message }}
      </label>
      <br />
      <input
        type="text"
        id="message"
        v-model="message"
        :placeholder="$translate('example1.B.1')"
      />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
