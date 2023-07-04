<script setup>
import Loading from "./Loading.vue";
import Error from "./Error.vue";
import { defineAsyncComponent } from "vue";
function updateState(resolve, reject, path) {
  setTimeout(() => {
    import(path)
      .then((value) => {
        resolve(value);
      })
      .catch(() => {
        reject(`${path} loading failed!`);
      });
  }, 3000);
}
const Example2Son = defineAsyncComponent({
  loader: () =>
    new Promise((resolve, reject) =>
      updateState(resolve, reject, "./Example2Son.vue")
    ),
  loadingComponent: Loading,
  timeout: 5000,
  errorComponent: Error
});
const Example2GrandSon = defineAsyncComponent({
  loader: () =>
    new Promise((resolve, reject) =>
      updateState(resolve, reject, "./Example2GrandSon.vue")
    ),
  loadingComponent: Loading,
  timeout: 5000,
  errorComponent: Error
});
</script>

<template>
  <div class="example">
    <div class="wrapper">
      <Example2Son />
    </div>
    <div class="wrapper">
      <Example2GrandSon />
    </div>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "2. Loading and Error States";
}
.wrapper {
  border: 1px solid var(--color-border);
  margin-bottom: 1em;
  padding: 1em;
}
</style>
