/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-14 17:35:36                                                  *
 * @LastModifiedDate: 2023-06-14 17:40:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp } from "vue";

createApp({
  setup() {
    const handler = () => {
      alert("Hello, Vue!");
    };
    return {
      handler,
    };
  },
  template: `<button @click.once="handler">can only work once</button>`,
}).mount("#app");
