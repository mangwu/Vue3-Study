/*
 * @Author: mangwu                                                             *
 * @File: example2.js                                                          *
 * @Date: 2023-06-14 09:03:02                                                  *
 * @LastModifiedDate: 2023-06-14 09:10:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp } from "vue";
import MyComponent from "./my-component.js";

const AppCpn = {
  template: `<MyComponent />`,
};

const app = createApp(AppCpn);
app.component("MyComponent", MyComponent);

app.mount("#app");
