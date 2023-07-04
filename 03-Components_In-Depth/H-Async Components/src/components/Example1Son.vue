<script setup>
import { defineAsyncComponent, ref, watchEffect } from "vue";
import Loading from "./Loading.vue";
const loading = ref(true);
function updateLoadingStatus(resolve, reject) {
  setTimeout(() => {
    import("./Example1GrandSon.vue")
      .then((value) => {
        loading.value = false;
        resolve(value);
      })
      .catch(() => {
        reject("加载Example1GrandSon组件失败");
      });
  }, 3000);
}
watchEffect(() => {
  console.log(loading.value);
});
const Example1GrandSon = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    updateLoadingStatus(resolve, reject);
  });
});
</script>
<template>
  <div class="son">
    Exampel1 Son
    <div v-if="loading"><Loading /> Loading...</div>
    <Example1GrandSon />
  </div>
</template>

<style scoped lang="css">
.son {
  border: 1px solid var(--color-border);
  padding: 1em;
}
</style>
