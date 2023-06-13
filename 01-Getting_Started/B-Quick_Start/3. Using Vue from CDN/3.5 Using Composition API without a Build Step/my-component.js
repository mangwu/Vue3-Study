/*
 * @Author: mangwu                                                             *
 * @File: my-component.js                                                           *
 * @Date: 2023-06-13 16:27:23                                                  *
 * @LastModifiedDate: 2023-06-13 16:35:18                                      *
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
    const count = ref(0);

    // 暴露给模板和其它选项式API钩子
    return {
      count,
    };
  },
  mounted() {
    console.log(this.count);
  },
  template: `<button @click="count++">{{ count }}</button>`,
};
