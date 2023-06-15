/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 16:25:23                                                  *
 * @LastModifiedDate: 2023-06-15 16:30:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref } from "vue";

createApp({
  setup() {
    const count = ref(0);
    const object = {
      foo: ref(1),
    };
    const { foo } = object;
    return {
      count,
      object,
      foo,
    };
  },
  template: `
  <div>count: {{count}}</div>
  <div>count + 1: {{count + 1}}</div>
  <div>object: {{object}}</div>
  <div>object.foo: {{object.foo}}</div>
  <div>object.foo + 1: {{object.foo + 1}}</div>
  <div>foo: {{foo}}</div>
  <div>foo + 1: {{foo + 1}}</div>
  `,
}).mount("#app");
