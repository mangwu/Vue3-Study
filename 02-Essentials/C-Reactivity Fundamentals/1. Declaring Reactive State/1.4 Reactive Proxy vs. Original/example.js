/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 10:27:30                                                  *
 * @LastModifiedDate: 2023-06-15 11:01:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, reactive } from "vue";

const app = createApp({
  setup() {
    const raw = { count: 0 };
    const nested = { arr: ["foo", "bar"] };
    const proxyState = reactive(raw);
    // 代理对象和原始对象不是全等的
    console.log(proxyState === raw); // false
    // 响应式对象内的嵌套对象依然是代理
    proxyState.nested = nested;
    console.log(proxyState.nested === nested); // false
    console.log(raw.nested === nested); // true

    // 在一个代理上调用 reactive() 会返回它自己
    const proxyStateCopy = reactive(proxyState);
    console.log(proxyStateCopy === proxyState); // true

    // 在同一个对象上调用reactive会返回相同的代理
    const otherProxyState = reactive(raw);
    console.log(otherProxyState === proxyStateCopy); // true
    function modifyRaw(m) {
      m.count++;
    }
    function modifyNested(n) {
      if (n) {
        n.arr.push(
          String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt())
        );
      }
    }
    function handler(type) {
      if (type === "raw") {
        // 处理原始数据不会引发DOM更新
        console.log(
          "处理原始数据不会引发DOM更新，但是下次使用raw代理相关进行的修改会包含本次修改的内容"
        );
        modifyRaw(raw);
      } else if (type === "nested") {
        // 处理原始数据的嵌套对象也不会引发DOM更新
        console.log(
          "处理原始数据的嵌套对象也不会引发DOM更新，但是下次使用nested代理相关进行的修改会包含本次修改的内容"
        );
        modifyNested(nested);
      } else if (type === "proxyState") {
        // 处理代理对象，vue会拦截一些操作并引发DOM更新
        console.log("处理代理对象，vue会拦截一些操作并引发DOM更新");
        modifyRaw(proxyState);
        modifyNested(proxyState.nested);
      } else if (type === "otherProxyState") {
        // 处理另一个代理对象，vue会拦截一些操作并引发DOM更新
        console.log("处理另一个代理对象，vue会拦截一些操作并引发DOM更新");
        modifyRaw(otherProxyState);
        modifyNested(otherProxyState.nested);
      } else if (type === "proxyStateCopy") {
        // 处理代理对象的代理，vue会拦截一些操作并引发DOM更新
        console.log("处理代理对象的代理，vue会拦截一些操作并引发DOM更新");
        modifyRaw(proxyStateCopy);
        modifyNested(proxyStateCopy.nested);
      }
    }
    return {
      proxyState,
      raw,
      handler,
    };
  },
  template: `
  <button @click="() => handler('raw')">raw</button>
  <button @click="() => handler('nested')">nested</button>
  <button @click="() => handler('proxyState')">proxyState</button>
  <button @click="() => handler('otherProxyState')">otherProxyState</button>
  <button @click="() => handler('proxyStateCopy')">proxyStateCopy</button>
  <div>proxyState: <pre>{{ proxyState }}</pre></div>
  <div>raw: <pre>{{ raw }}</pre></div>
  `,
});
app.mount("#app");
