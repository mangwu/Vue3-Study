/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 23:10:28                                                  *
 * @LastModifiedDate: 2023-06-15 23:31:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, reactive, computed, ref } from "vue";

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
    const refresh = ref(false);
    function refreshDOM() {
      refresh.value = !refresh.value;
    }
    function hasBooks(type = "computed") {
      console.log("hasBooks", type); // 调用者的类型
      return author.books.length > 0 ? "Yes" : "No";
    }
    const publishedBooksMessage = computed(hasBooks);

    return { hasBooks, publishedBooksMessage, refreshDOM, refresh };
  },
  template: `<span style="display:none">{{ refresh }}</span>
  <button @click="refreshDOM"> refresh </button><p>Has piblished books</p>
  <p>method ans: {{ hasBooks("method") }}</p>
  <p>computed ans: {{ publishedBooksMessage }}</p>
  `,
}).mount("#app");
