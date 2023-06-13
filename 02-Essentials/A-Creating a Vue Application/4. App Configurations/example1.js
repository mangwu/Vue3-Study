/*
 * @Author: mangwu                                                             *
 * @File: example1.js                                                          *
 * @Date: 2023-06-13 17:12:49                                                  *
 * @LastModifiedDate: 2023-06-13 17:49:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref } from "vue";
import ErrorCpn from "./error.js";
const app = createApp({
  setup() {
    const errorMessage = ref("generate error");
    const increment = () => {
      throw new Error("主动点击产生的错误");
    };
    return { errorMessage, increment };
  },
  template: `<button @click="increment">{{ errorMessage }}</button>`,
});

app.config.errorHandler = (err) => {
  // 处理错误
  console.log(err, err.message);
  app.unmount();
  const errorApp = createApp({
    template: `<ErrorCpn error=${err.message} />`,
    components: { ErrorCpn },
  });
  errorApp.mount("#app");
};
app.mount("#app");
