/*
 * @Author: mangwu                                                             *
 * @File: container1.js                                                        *
 * @Date: 2023-06-14 09:13:27                                                  *
 * @LastModifiedDate: 2023-06-14 09:15:38                                      *
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
    const message = ref("Hello, Vue!");
    return { message };
  },
  template: `<div>message</div>`,
};
