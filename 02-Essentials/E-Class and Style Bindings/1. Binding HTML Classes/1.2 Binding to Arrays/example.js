/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-16 10:06:20                                                  *
 * @LastModifiedDate: 2023-06-16 10:42:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref, reactive, computed } from "vue";

createApp({
  setup() {
    const isActive = ref(false);
    const hasError = ref(false);
    const isSuccess = ref(false);
    return { isActive, hasError, isSuccess };
  },
  template: `
  <div>根据ref决定数组元素</div>
  <input type="checkbox" id="is-active" name="isActive" v-model="isActive" />
  <label for="is-active">active</label>
  <input type="checkbox" id="has-error" name="hasError" v-model="hasError" />
  <label for="has-error">error</label>
  <input type="checkbox" id="is-success" name="isSuccess" v-model="isSuccess" />
  <label for="is-success">success</label>
  <p :class="[isActive ? 'active':'' ,hasError ? 'error':'', isSuccess ? 'success':'' ,'normal']">
  根据状态改变类名，从而改变样式</p>
  `,
}).mount("#app1");

createApp({
  setup() {
    const raw = ["active", "error", "success"];
    const className = reactive([...raw, "normal"]);
    function handler(e, index) {
      className[index] = e.target.checked ? raw[index] : "";
    }
    return { className, handler };
  },
  template: `
  <div>将整个类名数组与响应性的reactive() 状态绑定</div>
  <input type="checkbox" id="is-active2" name="isActive" 
    :checked="className[0] === 'active'" 
    @click="(e) => handler(e, 0)"
  />
  <label for="is-active2">active</label>
  <input type="checkbox" id="has-error2" name="hasError" 
    :checked="className[1] === 'error'"  
    @click="(e) => handler(e, 1)"
  />
  <label for="has-error2">error</label>
  <input type="checkbox" id="is-success2" name="isSuccess" 
    :checked="className[2] === 'success'"  
    @click="(e) => handler(e, 2)"
  />
  <label for="is-success2">success</label>
  <p :class="className">根据状态改变类名，从而改变样式</p>  
  `,
}).mount("#app2");

createApp({
  setup() {
    const isActive = ref(false);
    const hasError = ref(false);
    const isSuccess = ref(false);
    const className = computed(() => {
      return [
        {
          active: isActive.value,
          error: hasError.value,
          success: isSuccess.value,
        },
        "normal",
      ];
    });
    return { isActive, hasError, isSuccess, className };
  },
  template: `
  <div>绑定一个返回数组的的计算属性</div>
  <input type="checkbox" id="is-active3" name="isActive" v-model="isActive" />
  <label for="is-active3">active</label>
  <input type="checkbox" id="has-error3" name="hasError" v-model="hasError" />
  <label for="has-error3">error</label>
  <input type="checkbox" id="is-success3" name="isSuccess" v-model="isSuccess" />
  <label for="is-success3">success</label>
  <p :class="className">根据状态改变类名，从而改变样式</p>
  `,
}).mount("#app3");
