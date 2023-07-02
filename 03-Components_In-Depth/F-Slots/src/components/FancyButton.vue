<script setup></script>

<template>
  <button class="fancy-btn"><slot> default-render-content </slot></button>
</template>

<style scoped lang="css">
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  min-height: 25.5px;
  min-width: 40px;
}
</style>
