/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-14 15:10:30                                                  *
 * @LastModifiedDate: 2023-06-14 15:14:41                                      *
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
  template: `<div>I cannot find {{ window ? window : "window" }}</div>`,
}).mount("#app1");

const app2 = createApp({
  template: `<div>I can find {{ window }}</div>`,
});
app2.config.globalProperties.window = window;
app2.mount("#app2");
