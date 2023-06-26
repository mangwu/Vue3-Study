<script setup lang="js">
import {ref} from "vue";
import Article from "./Example6/Article.vue";
import Home from "./Example6/Home.vue";
import Posts from "./Example6/Posts.vue";
const curTab = ref("Home");
const rawCpns = {
  Home,
  Posts,
  Article
}
</script>

<template>
  <div class="example example6">
    <button
      v-for="(_, tab) in rawCpns"
      :key="tab"
      :class="['tab-button', { active: tab === curTab }]"
      @click="curTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="rawCpns[curTab]"  class="tab"/>
  </div>
</template>

<style scoped lang="css">
.example6:hover::before {
  content: "6. Dynamic Components";
}
.example6 {
  user-select: none;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #b3f4ba;
  cursor: pointer;
  background: #a8f3d7;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #34fbb2;
}
.tab-button.active {
  background: #34fbb2;
}
.tab {
  border: 1px solid #49dc5a83;
  padding: 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
