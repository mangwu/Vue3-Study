<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const kkk = proxy.$translate("example2.content.3", false);
</script>

<template>
  <div class="example">
    <h3>
      {{ $translate("example2.title") }}
    </h3>
    <p v-for="i of 3" :key="i">
      {{ $translate(`example2.content.${i - 1}`) }}
    </p>
    <p>{{ kkk }}</p>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2. Writing a Plugin";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2. 编写一个插件";
}
p {
  text-indent: 1em;
}
html[lang="en"] p {
  line-height: 1.4;
}
</style>
