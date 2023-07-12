<script setup></script>

<template>
  <div class="example">
    <h2>
      {{ $translate("example1") }}
    </h2>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "1. Hello Vue!";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "1. 你好 Vue！";
}
</style>
