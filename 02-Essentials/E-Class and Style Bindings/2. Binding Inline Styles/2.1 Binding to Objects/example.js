/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-16 15:40:16                                                  *
 * @LastModifiedDate: 2023-06-16 15:51:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref, reactive } from "vue";

createApp({
  setup() {
    const color = ref("#ff0000");
    const fontSize = ref(16);
    return { color, fontSize };
  },
  template: `
  <input type="color" name="color" id="color" v-model="color" size="16"/>
  <input type="number" name="" id="" min="10" max="128" v-model="fontSize" size="20"/>
  <p :style="{ color: color, fontSize: fontSize + 'px'}">Hello, Vue!</p>
  `,
}).mount("#app1");

createApp({
  setup() {
    const styleObject = reactive({
      color: "#ff0000",
      fontSize: 16,
    });
    return { styleObject };
  },
  template: `
  <input type="color" name="color" id="color" v-model="styleObject.color" />
  <input type="number" name="" id="" min="10" max="128" v-model="styleObject.fontSize" />
  <p :style="{ color: styleObject.color, 'font-size': styleObject.fontSize + 'px'}">Hello, Vue!</p>
  `,
}).mount("#app2");
