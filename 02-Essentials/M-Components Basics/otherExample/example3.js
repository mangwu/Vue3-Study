/*
 * @Author: mangwu                                                             *
 * @File: example3.js                                                          *
 * @Date: 2023-06-26 23:38:19                                                  *
 * @LastModifiedDate: 2023-06-26 23:44:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref } from "vue";
const BlogPostRow = {
  template: `<tr><td>hello vue</td><td>Element Placement Restrictions</td></tr>`,
};

createApp({
  components: { BlogPostRow },
}).mount("#app");
