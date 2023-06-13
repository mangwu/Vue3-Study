/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-13 15:30:11                                                  *
 * @LastModifiedDate: 2023-06-13 15:30:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
}).mount("#app");
