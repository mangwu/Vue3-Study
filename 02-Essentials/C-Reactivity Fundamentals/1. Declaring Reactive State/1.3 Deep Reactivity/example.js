/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 10:07:06                                                  *
 * @LastModifiedDate: 2023-06-15 10:17:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
import { createApp, reactive, nextTick } from "vue";

createApp({
  setup() {
    const state1 = reactive({
      nested: { count: 0 },
      arr: ["foo", "bar"],
    });
    const state2 = reactive({
      nested: { count: 0 },
      arr: ["foo", "bar"],
    });

    function mutateDeeply() {
      // 修改原始数据类型的属性值也会引发响应式的DOM 更新，这点和React不一样
      state1.nested.count++;
      state2.arr.push("baz");
      // 更新前
      console.log(document.querySelector("button").textContent);

      nextTick(() => {
        // 访问更新后的 DOM
        console.log(document.querySelector("button").textContent);
      });
    }
    return { state1, state2, mutateDeeply };
  },
  template: `<button @click="mutateDeeply">{{ JSON.stringify(state1) + JSON.stringify(state2) }}</button>`,
}).mount("#app");
