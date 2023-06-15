/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 09:51:09                                                  *
 * @LastModifiedDate: 2023-06-15 09:56:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { reactive, createApp, nextTick } from "vue";

createApp({
  setup() {
    const state = reactive({ count: 0 });
    function increment() {
      state.count++;
      // 更新前
      console.log(document.querySelector("button").textContent);

      nextTick(() => {
        // 访问更新后的 DOM
        console.log(document.querySelector("button").textContent);
      });
    }
    return {
      increment,
      state,
    };
  },
}).mount("#app");
