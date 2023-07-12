<script setup>
import gsap from "gsap";
import { ref, watch } from "vue";
const raw = [
  "Bruce Lee",
  "Jackie Chan",
  "Chuck Norris",
  "Jet Li",
  "Kung Fury",
  "Mang Wu",
  "Kang Kang"
];
const list = ref(raw.slice());
const search = ref("");
watch(search, () => {
  list.value = raw.filter((v) => v.indexOf(search.value) !== -1);
});
function beforeEnterHandler(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}
function enterHandler(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: "1.6em",
    delay: el.dataset.index * 0.15,
    onComplete: done
  });
}
function leaveHandler(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  });
}
</script>

<template>
  <div class="example">
    <input type="text" v-model="search" />
    <TransitionGroup
      tag="ul"
      @before-enter="beforeEnterHandler"
      @enter="enterHandler"
      @leave="leaveHandler"
    >
      <li
        class="data-li"
        v-for="(item, index) of list"
        :key="item"
        :data-index="index"
      >
        {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "4. Staggering List Transitions";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "4. 渐进延迟列表动画";
}
</style>
