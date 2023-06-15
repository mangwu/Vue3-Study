/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-16 00:13:35                                                  *
 * @LastModifiedDate: 2023-06-16 00:49:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref, computed } from "vue";

createApp({
  setup() {
    const firstName = ref("John");
    const secondName = ref("Doe");
    const inputValue = ref("");
    function handler() {
      fullName.value = inputValue.value;
    }
    const fullName = computed({
      get() {
        return firstName.value + " " + secondName.value;
      },
      set(newValue) {
        const cur = newValue.split(" ");
        if (cur.length === 1) {
          cur.push("");
        }
        [firstName.value, secondName.value] = cur;
      },
    });
    return { fullName, inputValue, handler };
  },
  template: `
  <input type="text" v-model="inputValue"/>
  <button type="submit" @click="handler">submit</button>
  <div>{{ fullName }}</div>
  `,
}).mount("#app");
