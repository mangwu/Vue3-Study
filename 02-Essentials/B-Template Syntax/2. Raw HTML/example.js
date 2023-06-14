/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-14 09:29:37                                                  *
 * @LastModifiedDate: 2023-06-14 09:32:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref } from "vue";

const app = {
  setup() {
    const rawHtml = ref(`<span style="color: red">This should be red.</span>`);
    return { rawHtml };
  },
  template: `<p>Using text interpolation: {{ rawHtml }} </p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>`,
};

createApp(app).mount("#app");
