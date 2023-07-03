<script setup>
import { reactive } from "vue";
const defaultContent = reactive({
  header: "(data from)Named Scoped Slots",
  content: [
    `Named scoped slots work similarly - slot props are accessible as the 
value of the v-slot directive: v-slot:name='slotProps'`,
    `When using the shorthand, it looks like this:`,
    `Passing props to a named slot:`
  ],
  footer: "@copyright © 2023 wangzhihao, All rights reserved."
});
</script>

<template>
  <div class="container">
    <header>
      <slot name="header" :default="defaultContent.header"></slot>
    </header>
    <main>
      <slot :default="defaultContent.content"></slot>
    </main>
    <footer>
      <slot name="footer" :footer="defaultContent.footer"></slot>
    </footer>
  </div>
</template>

<style scoped lang="css">
.container {
  border: 1px solid #eee;
  font-size: 16px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
}
header {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
main {
  padding: 0 6px;
}
:deep(main > p) {
  text-indent: 1em;
}
/* v-deep() */
footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  background: #eee;
  width: 100%;
}
</style>
