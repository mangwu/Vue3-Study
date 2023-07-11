<script setup>
import { ref, reactive } from "vue";
import FancyButton from "./FancyButton.vue";
import CustomTransition from "./CustomTransition.vue";
const picked = ref("none");
const transitionName = reactive(["fade", "gsap", "animation", "none"]);
const idx = ref(0);

function next() {
  idx.value++;
  idx.value %= 3;
}
function pre() {
  idx.value--;
  idx.value += 3;
  idx.value %= 3;
}
</script>

<template>
  <div class="example">
    <div class="picked">
      <div v-for="value of transitionName" :key="value" class="radio">
        <input
          v-model="picked"
          :value="value"
          type="radio"
          name="transition-name"
          :id="value"
        />
        <label :for="value">{{ value }}</label>
      </div>
    </div>

    <div class="wrapper">
      <h2>{{ $translate("example11.title") }}</h2>
      <FancyButton @click="pre">{{ $translate("example11.btn.0") }}</FancyButton>
      <FancyButton @click="next">{{
        $translate("example11.btn.1")
      }}</FancyButton>
      <CustomTransition :name="picked">
        <div :key="idx">
          {{ $translate(`example11.content.${idx}`) }}
        </div>
      </CustomTransition>
    </div>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "9. Dynamic Transitions";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "9. 动态过渡";
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
  padding: 8px;
  height: 200px;
}
.btn {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 16px;
}
.radio {
  display: flex;
  gap: 4px;
  align-items: center;
}
.picked {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 8px 4px;
  justify-content: space-around;
}
</style>
