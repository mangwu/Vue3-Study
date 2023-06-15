/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 16:57:58                                                  *
 * @LastModifiedDate: 2023-06-15 17:20:50                                      *
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
    const count = ref(0);
    const state = reactive({
      count,
    });
    count.value = 1;
    console.log(
      state, // Proxy(Object) {count: RefImpl}
      state.count, // 1
      typeof state.count, // "number"
      state.count.value, // undefined
      state.count === count, // false
      state.count === count.value // true
    );
    state.count = 2;
    console.log(count.value); // 2
    const otherCount = ref(3);
    state.count = otherCount;
    console.log(state.count); // 3
    console.log(count.value); // 2
    return { count, state };
  },
  template: `
  <div>count: {{count}}</div>
  <div>state: {{state}}</div>
  <div>state.count: {{state.count}}</div>
  <div>state.count + 1: {{state.count + 1}}</div>
  <div>state.count.value: {{state.count.value}}</div>
  `,
}).mount("#app");
