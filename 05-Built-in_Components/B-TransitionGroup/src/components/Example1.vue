<script setup>
import FancyButton from "./FancyButton.vue";
import { ref, reactive } from "vue";
const idx = ref(0);
const content = ref("");
const location = ref(undefined);
const list = reactive([]);
function addtionClickHandler() {
  if (content.value && location.value >= 0 && location.value <= list.length) {
    list.splice(location.value, 0, { content: content.value, key: idx.value });
    idx.value++;
  } else {
    alert(`请输入内容和范围在[0,${list.length}]的位置`);
  }
}
function removeClickHandler(_e, index) {
  list.splice(index, 1);
}
</script>

<template>
  <div class="example">
    <label for="content">{{ $translate("example1.0") }} ：</label>
    <input
      type="text"
      :placeholder="$translate('example1.2')"
      id="content"
      v-model="content"
    />
    <br />
    <label for="location">{{ $translate("example1.1") }} ：</label>
    <input
      type="number"
      :placeholder="$translate('example1.3')"
      id="location"
      v-model="location"
      :min="0"
      :max="list.length"
    />
    <FancyButton @click="addtionClickHandler">{{
      $translate("common.2")
    }}</FancyButton>
    <ul>
      <!-- <ul :style="{ height: list.length * 36 + 'px' }"> -->
      <TransitionGroup>
        <li v-for="(item, index) of list" :key="item.key">
          {{ item.content }}
          <FancyButton @click="(e) => removeClickHandler(e, index)">{{
            $translate("common.3")
          }}</FancyButton>
        </li>
      </TransitionGroup>
    </ul>
  </div>
</template>

<style scoped lang="css">
html[lang="en"] .example:hover::before {
  content: "2. Enter / Leave Transitions";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "2. 进入 / 离开动画";
}
li.v-enter-active,
li.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
li {
  height: 36px;
}

ul {
  background-color: var(--color-background-2);
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 180px;
}
</style>
