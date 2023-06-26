/*
 * @Author: mangwu                                                             *
 * @File: example2.js                                                          *
 * @Date: 2023-06-26 22:56:22                                                  *
 * @LastModifiedDate: 2023-06-26 23:33:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref, computed } from "vue";
const BlogPost = {
  props: ["title", "fontSize"],
  setup(props, ctx) {
    function largeFontSize() {
      ctx.emit("large-font-size");
    }
    const style = computed(() => {
      return { fontSize: props.fontSize + "px" };
    });
    return {
      title: props.title,
      style,
      largeFontSize,
    };
  },
  template: `<div><div :style="style"> {{ title }} </div>
  <button @click="largeFontSize">large font size</button></div>`,
};
const appInstance = createApp({
  components: {
    BlogPost,
  },
  setup() {
    const title = ref("Hello, Vue!");
    const fontSize = ref(16);
    function addSize() {
      fontSize.value++;
      console.log(fontSize.value);
    }
    return {
      title,
      fontSize,
      addSize,
    };
  },
});

appInstance.mount("#app");
