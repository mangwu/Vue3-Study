/*
 * @Author: mangwu                                                             *
 * @File: container2.js                                                        *
 * @Date: 2023-06-14 09:13:34                                                  *
 * @LastModifiedDate: 2023-06-14 09:16:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { ref } from "vue";

export default {
  setup() {
    const message = ref("Hello, World!");
    return { message };
  },
  template: `<div>message</div>`,
};
