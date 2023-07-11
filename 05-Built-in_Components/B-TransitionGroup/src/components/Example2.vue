<script setup>
import FancyButton from "./FancyButton.vue";
import { ref } from "vue";
const idx = ref(0);
const content = ref("");
const location = ref(undefined);
const list = ref([]);
function addtionClickHandler() {
  if (
    content.value &&
    location.value >= 0 &&
    location.value <= list.value.length
  ) {
    list.value.splice(location.value, 0, {
      content: content.value,
      key: idx.value
    });
    idx.value++;
  } else {
    alert(`请输入内容和范围在[0,${list.value.length}]的位置`);
  }
}
function removeClickHandler(_e, index) {
  list.value.splice(index, 1);
}
function randomSort() {
  const n = list.value.length;
  const newValue = [...list.value];
  let cur = n;
  while (cur) {
    const idx1 = Math.floor(Math.random() * n);
    const idx2 = Math.floor(Math.random() * n);
    [newValue[idx1], newValue[idx2]] = [newValue[idx2], newValue[idx1]];
    cur--;
  }
  list.value = newValue;
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
    <FancyButton @click="addtionClickHandler">
      {{ $translate("common.2") }}
    </FancyButton>
    <FancyButton @click="randomSort">{{ $translate("common.4") }}</FancyButton>
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
  content: "3. Move Transitions";
}
html[lang="zh-Hans"] .example:hover::before {
  content: "3. 移动动画";
}
li.v-move,/* 对移动中的元素应用的过渡 */
li.v-enter-active,
li.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
li.v-leave-active {
  position: absolute;
}
li {
  height: 36px;
}

ul {
  background-color: var(--color-background-2);
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 185px;
}
</style>
