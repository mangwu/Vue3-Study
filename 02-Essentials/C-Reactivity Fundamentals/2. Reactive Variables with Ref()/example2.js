/*
 * @Author: mangwu                                                             *
 * @File: example2.js                                                          *
 * @Date: 2023-06-15 14:51:47                                                  *
 * @LastModifiedDate: 2023-06-15 15:03:17                                      *
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
    const objectRef = ref({ count: 0 });
    function objectIncrement() {
      objectRef.value = { count: objectRef.value.count + 1 };
    }
    const obj = {
      foo: ref(1),
      bar: ref(2),
    };
    const { foo, bar } = obj;
    function handler(type) {
      if (type === "objectIncrement") {
        objectIncrement();
      } else if (type == "foo") {
        foo.value++;
      } else if (type === "bar") {
        bar.value++;
      }
    }
    return {
      handler,
      objectRef,
      foo,
      bar,
      obj,
    };
  },
  template: `
  <button @click="() => handler('objectIncrement')">objectIncrement</button>
  <button @click="() => handler('foo')">foo</button>
  <button @click="() => handler('bar')">bar</button>
  <div>objectRef: <pre>{{ JSON.stringify(objectRef) }}</pre></div>
  <div>foo: <pre>{{ JSON.stringify(foo) }}</pre></div>
  <div>bar: <pre>{{ JSON.stringify(bar) }}</pre></div>
  <div>obj: <pre>{{ JSON.stringify(obj) }}</pre></div>
  `,
}).mount("#app");
