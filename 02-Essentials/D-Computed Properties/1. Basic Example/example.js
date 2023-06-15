/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 22:04:47                                                  *
 * @LastModifiedDate: 2023-06-15 22:20:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, computed, reactive } from "vue";

createApp({
  setup() {
    const author = reactive({
      name: "John Doe",
      books: [
        "Vue 2 - Advanced Guide",
        "Vue 3 - Basic Guide",
        "Vue 4 - The Mystery",
      ],
    });
    // 一个计算属性 ref
    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? "Yes" : "No";
    });
    return { publishedBooksMessage };
  },
  template: `<p>Has publishde books:</p><span>{{ publishedBooksMessage}}</span>`,
}).mount("#app");
