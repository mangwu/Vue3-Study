/*
 * @Author: mangwu                                                             *
 * @File: error.js                                                             *
 * @Date: 2023-06-13 17:19:54                                                  *
 * @LastModifiedDate: 2023-06-13 17:49:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


const ErrorCpn = {
  props: {
    error: String,
  },
  template: `<div class="error">{{ error }}</div>`,
};
export default ErrorCpn;
