<script setup lang="js">
import { ref, watch } from "vue";
const question = ref("");
const disabled = ref(false)
const ans = ref('Questions usually contain a question mark. ;-)')
const url = ref("");
const tempAns = ref("");

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    // 有输入问好才进行询问请求
    ans.value = "thinking..."
    disabled.value = true;
    fetch("https://yesno.wtf/api").then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res);
      url.value = res.image;
      tempAns.value = res.answer;

    }).catch(error => {
      ans.value = "Error! Could not reach the API." + error
      disabled.value = false;
    })
  }
})
const handlerLoad =(e) => {
  disabled.value = false;
  ans.value = tempAns.value;
}
</script>

<template>
  <div class="example example1">
    <p>
      Ask a yes/no question:
      <input
        type="text"
        v-model="question"
        :disabled="disabled"
        placeholder="Automatically request an answer when asking questions with question marks"
      />
    </p>
    <p>{{ ans }}</p>
    <img v-if="url" :src="url" @load="handlerLoad" />
  </div>
</template>

<style scoped lang="css">
.example1:hover::before {
  content: "1. Watchers-Basic Example";
}
img {
  max-width: 310px;
  max-height: 190px;
}
</style>
