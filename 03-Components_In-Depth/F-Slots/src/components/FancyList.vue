<script setup>
import { ref, watch } from "vue";
import { data } from "../store/data";
const curContent = ref([]);
const total = data.length;
const props = defineProps(["perPageSize", "curPage"]);
const emit = defineEmits(["handle-select-wrong-change"]);
watch(
  [() => props.perPageSize, () => props.curPage],
  () => {
    curContent.value = [];
    setTimeout(() => {
      const start = props.curPage * props.perPageSize;
      const end = start + props.perPageSize;
      if (start >= total) {
        emit(
          "handle-select-wrong-change",
          Math.ceil(total / props.perPageSize) - 1
        );
        return;
      }
      const newContent = data.slice(start, end);
      curContent.value = newContent;
    }, 500);
  },
  { immediate: true }
);
</script>

<template>
  <ul>
    <li v-if="!curContent.length">Loading</li>
    <li v-for="item of curContent" :key="item.id">
      <slot name="item" v-bind="item"></slot>
    </li>
  </ul>
  <slot name="pagigation" :total="total"></slot>
</template>

<style scoped lang="css">
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  max-height: calc(100% - 36px);
  overflow-y: auto;
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
ul::-webkit-scrollbar {
  width: 4px;
}
ul::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  opacity: 0.2;
  background: fade(#647eff, 60%);
}
ul::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: fade(#647eff, 30%);
}
</style>
