/*
 * @Author: mangwu                                                             *
 * @File: my-component.js                                                      *
 * @Date: 2023-06-14 09:03:48                                                  *
 * @LastModifiedDate: 2023-06-14 09:06:20                                      *
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
    const increment = () => count.value++;
    return { count, increment };
  },
  template: `<button @click="increment">{{ count }}</button>`,
};
