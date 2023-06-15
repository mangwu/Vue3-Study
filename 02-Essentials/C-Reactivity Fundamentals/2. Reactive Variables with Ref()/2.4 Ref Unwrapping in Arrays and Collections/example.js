/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-15 17:33:51                                                  *
 * @LastModifiedDate: 2023-06-15 17:41:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref, reactive } from "vue";

createApp({
  setup() {
    const book = ref("Vue 3 Guide");
    const books = reactive([book]);
    console.log(books[0], books[0].toString(), books[0].value);

    const bookMap = new Map([["book", book]]);
    console.log(
      bookMap.get("book"),
      bookMap.get("book").toString(),
      bookMap.get("book").value
    );
    return { book, books, bookMap };
  },
  template: `
  <div>book:{{ book }}</div>
  <div>books:{{ books }}</div>
  <div>books[0]:{{ books[0] }}</div>
  <div>books[0].value:{{ books[0].value }}</div>
  <div>bookMap:{{ bookMap }}</div>
  <div>bookMap.get("book"):{{ bookMap.get("book") }}</div>
  <div>bookMap.get("book").value:{{ bookMap.get("book").value }}</div>
  `,
}).mount("#app");
