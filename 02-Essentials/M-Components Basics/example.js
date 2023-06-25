/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-24 03:15:13                                                  *
 * @LastModifiedDate: 2023-06-24 03:18:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import {
  ref,
  createApp
} from "vue";

const AppCpn = {
  setup() {
    const msg = ref(`When not using a build step, a Vue component can be 
    defined as a plain JavaScript object containing Vue-specific options:`)
    return {
      msg,
    }
  },
  template: `<p>{{ msg }}</p>`
}

createApp(AppCpn).mount("#app")