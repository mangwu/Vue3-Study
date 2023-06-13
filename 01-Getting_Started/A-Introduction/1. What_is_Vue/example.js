/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-13 09:29:20                                                  *
 * @LastModifiedDate: 2023-06-13 09:31:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { createApp } = Vue;

// 选项式写法
createApp({
  data() {
    return {
      count: 0,
    };
  },
}).mount("#app");


