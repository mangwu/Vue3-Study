<script setup>
import TransitionCpn from "./TransitionCpn.vue";
import Example10Son1 from "./Example10Son1.vue";
import Example10Son2 from "./Example10Son2.vue";
import FancyButton from "./FancyButton.vue";
import { ref, defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import ErrorCpn from "./Error.vue";
const idx = ref(0);
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
const raw = {
  0: Example10Son1,
  1: Example10Son2,
  2: defineAsyncComponent({
    loader: () =>
      new Promise((resolve, reject) =>
        updateState(resolve, reject, "./Example10Son3.vue")
      ),
    loadingComponent: Loading,
    timeout: 5000,
    errorComponent: ErrorCpn
  })
};
function getCpn() {
  return raw[idx.value];
}
function clickHandler(_e, index) {
  idx.value = index;
}
</script>

<template>
  <div class="example">
    <div class="btn">
      <FancyButton
        v-for="(_value, key) of raw"
        :key="key"
        @click="(e) => clickHandler(e, key)"
      >
        {{ $translate("example10.1") }}
        {{ Number(key) + 1 }}
      </FancyButton>
    </div>
    <div class="wrapper">
      <TransitionCpn>
        <component :is="getCpn()"></component>
      </TransitionCpn>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "8. Transition Between Components";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "8. 组件间过渡";
}
.wrapper {
  border-radius: 5px;
  box-shadow: 0 3px 3px 0 var(--color-box-shadow-1),
    0 2px 6px -1px var(--color-box-shadow-2),
    0 4px 4px 0 var(--color-box-shadow-2), 3px 0 3px 0 var(--color-box-shadow-1),
    2px 0 6px -1px var(--color-box-shadow-2),
    4px 0 4px 0 var(--color-box-shadow-2);
  border: 1px solid var(--color-border);
  background-color: var(--color-background-0);
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
}
.btn {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 16px;
}
</style>
