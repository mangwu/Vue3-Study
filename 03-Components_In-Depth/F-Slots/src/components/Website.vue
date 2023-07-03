<script setup></script>

<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
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
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}
main {
  padding: 0 6px;
}
:deep(main > p) {
  text-indent: 1em;
}
footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  background: #eee;
  width: 100%;
}
</style>
