<script setup lang="js">
import { computed, reactive,ref } from "vue";
import Example4Son from "./Example4Son.vue";
import Example4Header from "./Example4Header.vue"
const article = reactive({
  title: "Defining a Component",
  content: "Single-File Component (SFC for short):"
})
const fontSize = ref(16);
const theme = ref("light");
const customStyle = computed(() => {
  return {
    fontSize: fontSize.value + "px",
    color: theme.value === "light" ? "#222" : "#eee",
    background: theme.value === "light" ? "#fff" : "#111",
  }
})
function changeFontSize(type = "add") {
  if(type === "add") {
    if(fontSize.value < 27) {
      fontSize.value++
    }
  } else {
    if(fontSize.value > 5) {
      fontSize.value--;
    }
  }
}
function changeTheme () {
  theme.value = theme.value === 'light' ? "dark" : "light";
}
</script>

<template>
  <div class="example example4" :style="customStyle">
    <Example4Header
      :theme="theme"
      :font-size="fontSize"
      @change-font-size="changeFontSize"
      @change-theme="changeTheme"
    />
    <example4-son
      :title="article.title"
      :content="article.content"
      :theme="theme"
    />
  </div>
</template>

<style scoped lang="css">
.example4:hover::before {
  content: "4. Listening to Events";
}
</style>
