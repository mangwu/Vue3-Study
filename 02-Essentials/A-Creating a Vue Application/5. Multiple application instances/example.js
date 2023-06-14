/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-14 09:13:17                                                  *
 * @LastModifiedDate: 2023-06-14 09:17:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp } from "vue";
import Container1 from "./container1.js";
import Container2 from "./container2.js";

const container1 = createApp(Container1);
const container2 = createApp(Container2);

container1.mount("#container1");
container2.mount("#container2");
