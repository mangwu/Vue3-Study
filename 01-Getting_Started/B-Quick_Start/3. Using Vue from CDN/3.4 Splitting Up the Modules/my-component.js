/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-13 16:03:39                                                  *
 * @LastModifiedDate: 2023-06-13 16:06:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

export default {
  data() {
    return { count: 0 };
  },
  template: `<button @click='event => count++'> count is {{ count }}</button>`,
};
