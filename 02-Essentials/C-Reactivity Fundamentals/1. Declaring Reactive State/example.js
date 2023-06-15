/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 09:30:27                                                  *
 * @LastModifiedDate: 2023-06-15 09:32:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { reactive, createApp } from "vue";

createApp({
  setup() {
    const state = reactive({ count: 0 });
    function increment() {
      state.count++;
    }
    return {
      state,
      increment,
    };
  },
}).mount("#app");
