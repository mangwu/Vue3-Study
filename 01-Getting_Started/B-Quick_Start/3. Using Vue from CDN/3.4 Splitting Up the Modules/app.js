/*
 * @Author: mangwu                                                             *
 * @File: app.js                                                               *
 * @Date: 2023-06-13 16:08:54                                                  *
 * @LastModifiedDate: 2023-06-13 16:18:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
import MyComponent from "./my-component.js";

export default {
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
  components: { MyComponent },
  template: `<div>{{ message }}</div><MyComponent />`,
};
