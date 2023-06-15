/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 13:54:09                                                  *
 * @LastModifiedDate: 2023-06-15 14:35:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref, reactive } from "vue";

createApp({
  setup() {
    const raw = [0];
    const count = ref(0);
    const count2 = ref(raw);
    const state = reactive(raw);
    const RefImpl = count.__proto__.constructor;
    console.log(
      count, // RefImpl {}
      count.value, // 0
      count._rawValue, // 0
      count._value, // 0
      count instanceof RefImpl // true
    );
    console.log(
      count2, // RefImpl {}
      count2.value, // Proxy(Array)
      count2._rawValue, // [0]
      count2._rawValue === raw, // true
      count2._value === state, // true
      count2 instanceof RefImpl // true
    );
    console.log(state);
    function increment() {
      count.value++;
    }
    return {
      count,
      increment,
    };
  },
  template: `<button @click="increment">{{ count }}</button>`,
}).mount("#app");
