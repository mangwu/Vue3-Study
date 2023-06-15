/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 23:10:28                                                  *
 * @LastModifiedDate: 2023-06-15 23:55:28                                      *
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
    // 用于刷新DOM
    function refreshDOM() {
      refreshTime.value = getCurrentDate();
    }
    const refreshTime = ref(new Date(Date.now()));

    const author = reactive({
      name: "John Doe",
      books: [
        "Vue 2 - Advanced Guide",
        "Vue 3 - Basic Guide",
        "Vue 4 - The Mystery",
      ],
    });

    function getCurrentDate() {
      return new Date(Date.now());
    }
    const computedTime = computed(getCurrentDate);

    function hasBooks(type = "computed") {
      console.log("hasBooks", type); // 调用者的类型
      return author.books.length > 0 ? "Yes" : "No";
    }
    const publishedBooksMessage = computed(hasBooks);

    return {
      hasBooks,
      publishedBooksMessage,
      getCurrentDate,
      refreshTime,
      computedTime,
      refreshDOM,
    };
  },
  template: `
  <button @click="refreshDOM"> refresh </button>
  <p>ref time: {{ refreshTime }}</p>
  <p>method time: {{ getCurrentDate() }}</p>
  <p>computed time: {{ computedTime }}</p>
  <p>Has published books</p>
  <p>method ans: {{ hasBooks("method") }}</p>
  <p>computed ans: {{ publishedBooksMessage }}</p>
  `,
}).mount("#app");
