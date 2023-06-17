<script setup lang="js">
import {reactive}from "vue";
const lists = reactive([{count:2},{count:5},{count:3},{count:5},{count:4},{count:6}])
</script>

<template>
  <div class="example example4">
    <h3>通过v-for和template实现的布局效果:</h3>
    <ul>
      <template v-for="({ count }, index) of lists" :key="index">
        <li>
          <template v-for="n of count" :key="n">
            <div class="box"></div>
            <div v-if="n !== count" class="horizontal-line"></div>
          </template>
        </li>
        <div v-if="index !== lists.length - 1" class="vertical-line"></div>
      </template>
    </ul>
  </div>
</template>

<style scoped lang="css">
.example4:hover::before {
  content: "4. v-for on <template>";
}
ul {
  list-style: none;
  border: 1px solid rgb(196, 196, 196);
  padding-left: 0;
}
li {
  height: 36px;
  display: flex;
}
.box {
  /* width: ; */
  height: 36px;
  flex: 1;
}
.vertical-line {
  border-bottom: 1px solid #cecece;
}
.horizontal-line {
  border-left: 1px solid #cecece;
}
</style>
