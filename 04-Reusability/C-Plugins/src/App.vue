<script setup>
import Example1 from "./components/Example1.vue";
import Example2 from "./components/Example2.vue";
// import Example3 from "./components/Example3.vue";
// import Example4 from "./components/Example4.vue";
import ExampleLast from "./components/ExampleLast.vue";
import ExampleLang from "./components/ExampleLang.vue";
import useThemeChange from "./composables/useThemeChange.js";
import useLangChange from "./composables/useLangChange.js";
useThemeChange();
useLangChange();

</script>

<template>
  <div class="app-wrapper">
    <Example1 />
    <Example2 />
    <!-- <Example3 /> -->
    <!-- <Example4 /> -->
    <!-- <Example5 /> -->
    <!-- <Example6 /> -->
    <!-- <Example7 /> -->
    <!-- <Example8 /> -->
    <!-- <Example9 /> -->
    <!-- <Example10 /> -->
    <!-- <Example11 /> -->
    <ExampleLang />
    <ExampleLast />
  </div>
</template>

<style scoped></style>
