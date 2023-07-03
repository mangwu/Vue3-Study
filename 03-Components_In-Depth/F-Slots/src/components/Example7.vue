<script setup>
import { ref } from "vue";
import FancyList from "./FancyList.vue";
import FancyButton from "./FancyButton.vue";
const perPageSize = ref(3);
const pageSizes = [3, 5, 10];
const curPage = ref(0);
function handerBtnClick(_e, type = "add") {
  if (type === "less") {
    curPage.value--;
  } else {
    curPage.value++;
  }
}
function handleSelectWrongChange(selected = 0) {
  curPage.value = selected;
}
</script>

<template>
  <div class="example">
    <FancyList
      :per-page-size="perPageSize"
      :cur-page="curPage"
      @handle-select-wrong-change="handleSelectWrongChange"
    >
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <div class="meta">
            <div>by</div>
            <div class="green">
              {{ username }}
            </div>
            <div>|</div>
            <div class="green">
              {{ likes }}
            </div>
          </div>
        </div>
      </template>
      <template #pagigation="{ total }">
        <div class="pagigation">
          <div>共 {{ total }} 条</div>
          <FancyButton
            @click="(e) => handerBtnClick(e, 'less')"
            :disabled="curPage === 0"
          >
            &lt;
          </FancyButton>
          <div class="current">{{ curPage + 1 }}</div>
          <FancyButton
            @click="handerBtnClick"
            :disabled="(curPage + 1) * perPageSize >= total"
          >
            &gt;
          </FancyButton>
          <select name="page-size" id="page-size" v-model="perPageSize">
            <option
              v-for="item of pageSizes"
              :key="item"
              :value="item"
              :aria-checked="perPageSize === item"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </template>
    </FancyList>
  </div>
</template>

<style scoped lang="css">
.example:hover::before {
  content: "6.2 Fancy List Example";
}
.example {
  position: relative;
}
.meta {
  display: flex;
  font-size: 0.8em;
  gap: 4px;
}
.green {
  color: #42b883;
}
.current {
  border: 1px solid #42b883;
  color: #42b883;
  height: 26px;
  border-radius: 3px;
  padding: 0 6px;
}
.pagigation {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 8px;
  box-sizing: border-box;
  right: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  text-align: right;
  height: 36px;
}
#page-size {
  outline: none;
  border: 1px solid #42b883;
  box-sizing: border-box;
  color: #3a936b;
  border-radius: 5px;
  padding: 3px;
}
option[aria-checked="false"] {
  color: #000;
}
option:hover {
  color: #fff;
  background-color: #bbffe1 !important;
}
option[aria-checked="true"] {
  background-color: #bbffe1;
}
#page-size:focus {
  outline: 1px solid #42b883;
}
</style>
