/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-14 14:36:17                                                  *
 * @LastModifiedDate: 2023-06-14 14:38:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref } from "vue";

const app = createApp({
  setup() {
    const btnDisabled = ref("");
    return {
      btnDisabled,
    };
  },
  template: `<button :disabled="btnDisabled">Hello</button>`,
});

app.mount("#app");
