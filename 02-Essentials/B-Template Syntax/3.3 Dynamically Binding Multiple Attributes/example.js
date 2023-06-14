/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-14 14:47:27                                                  *
 * @LastModifiedDate: 2023-06-14 14:51:23                                      *
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
    const attributes = ref({
      id: "structure",
      class: "icon-svg",
      alt: "结构",
      src: "../../../images/结构.svg",
    });
    return { attributes };
  },
  template: `<img v-bind="attributes" />`,
}).mount("#app");
