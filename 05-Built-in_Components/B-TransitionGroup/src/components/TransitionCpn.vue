<script setup></script>

<template>
  <Transition mode="out-in" appear name="fade">
    <slot></slot>
  </Transition>
</template>

<style scoped lang="css">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
</style>
