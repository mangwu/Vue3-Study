/*
 * @Author: mangwu                                                             *
 * @File: example.js                                                           *
 * @Date: 2023-06-14 16:33:07                                                  *
 * @LastModifiedDate: 2023-06-14 17:10:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

import { createApp, ref } from "vue";

createApp({
  setup() {
    const eventType = ref("click");
    const message = ref("");
    const handler = (e) => {
      if (e.type === "click") {
        message.value = "you click me";
      } else if (e.type === "contextmenu") {
        e.preventDefault();
        message.value = "you invoke contextmenu";
      }
    };
    const changeEventType = (e) => {
      eventType.value = e.target.value;
    };
    return {
      eventType,
      handler,
      message,
      changeEventType,
    };
  },
  template: `<fieldset><legend>Select a event type </legend>
  <input type="radio" name="event-type" id="click" value="click" checked @click="changeEventType">
  <label for="click">click event type</label><br/>
  <input type="radio" name="event-type" id="contextmenu" value="contextmenu" @click="changeEventType">
  <label for="contextmenu">contextmenu event type</label></fieldset>
  <div @[eventType]="handler" class="click-me">{{ eventType }}</div>
  <div class="message">{{ message }}</div>
  `,
}).mount("#app");
