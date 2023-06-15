/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 11:16:44                                                  *
 * @LastModifiedDate: 2023-06-15 14:46:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, reactive } from "vue";

createApp({
  setup() {
    const raw = { count: 0, arr: ["foo"] };
    const state = reactive(raw);
    let { count, arr } = state;
    // arr是代理
    console.log(arr === raw.arr); // false 
    function handler(type) {
      if (type === "state count") {
        state.count++;
      } else if (type === "count") {
        console.log(count);
        count++;
      } else if (type === "state arr") {
        // 会引发DOM更新
        state.arr.push("baz");
      } else if (type === "arr") {
        // 会引发DOM更新
        arr.push("baz");
      }
    }
    return { state, count, arr, handler };
  },
  template: `
  <button @click="() => handler('count')">count</button>
  <button @click="() => handler('state count')">state count</button>
  <button @click="() => handler('arr')">arr</button>
  <button @click="() => handler('state arr')">state arr</button>
  <div>state: <pre>{{ JSON.stringify(state) }}</pre></div>
  <div>arr: <pre>{{ JSON.stringify(arr) }}</pre></div>
  <div>count: <pre>{{ count }}</pre></div>
  `,
}).mount("#app");
