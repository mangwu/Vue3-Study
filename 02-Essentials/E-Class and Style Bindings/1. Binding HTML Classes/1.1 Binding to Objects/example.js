/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-16 01:27:14                                                  *
 * @LastModifiedDate: 2023-06-16 02:10:51                                      *
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
  <div>内联字面量的形式</div>
  <input type="checkbox" id="is-active" name="isActive" v-model="isActive" />
  <label for="is-active">active</label>
  <input type="checkbox" id="has-error" name="hasError" v-model="hasError" />
  <label for="has-error">error</label>
  <input type="checkbox" id="is-success" name="isSuccess" v-model="isSuccess" />
  <label for="is-success">success</label>
  <p :class="{active: isActive, error: hasError, success: isSuccess}" class="normal">根据状态改变类名，从而改变样式</p>
  `,
}).mount("#app1");

createApp({
  setup() {
    const className = reactive({
      active: false,
      error: false,
      success: false,
    });
    return { className };
  },
  template: `
  <div>将整个对象与响应性的reactive() 状态绑定</div>
  <input type="checkbox" id="is-active2" name="isActive" v-model="className.active" />
  <label for="is-active2">active</label>
  <input type="checkbox" id="has-error2" name="hasError" v-model="className.error" />
  <label for="has-error2">error</label>
  <input type="checkbox" id="is-success2" name="isSuccess" v-model="className.success" />
  <label for="is-success2">success</label>
  <p :class="className" class="normal">根据状态改变类名，从而改变样式</p>
  `,
}).mount("#app2");

createApp({
  setup() {
    const isActive = ref(false);
    const hasError = ref(false);
    const isSuccess = ref(false);
    const className = computed(() => {
      return {
        active: isActive.value,
        error: hasError.value,
        success: isSuccess.value,
      };
    });
    return { isActive, hasError, isSuccess,className };
  },
  template: `
  <div>绑定一个返回对象的计算属性</div>
  <input type="checkbox" id="is-active3" name="isActive" v-model="isActive" />
  <label for="is-active3">active</label>
  <input type="checkbox" id="has-error3" name="hasError" v-model="hasError" />
  <label for="has-error3">error</label>
  <input type="checkbox" id="is-success3" name="isSuccess" v-model="isSuccess" />
  <label for="is-success3">success</label>
  <p :class="className" class="normal">根据状态改变类名，从而改变样式</p>
  `,
}).mount("#app3");
