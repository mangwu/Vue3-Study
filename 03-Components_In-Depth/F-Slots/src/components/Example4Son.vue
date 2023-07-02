<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  firstName: String,
  secondName: String,
  firstNameModifiers: {
    type: Object,
    default: () => ({})
  },
  secondNameModifiers: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['update:first-name', 'update:second-name'])
function capitalizeValue(value, type = 'firstNameModifiers') {
  if (!value) return value
  if (props[type].capitalize) {
    return value[0].toLocaleUpperCase() + value.slice(1)
  }
  return value
}
function handlerInput(e, type = 'first-name') {
  let value = e.target.value
  value = capitalizeValue(
    value,
    type === 'first-name' ? 'firstNameModifiers' : 'secondNameModifiers'
  )
  emit(`update:${type}`, value)
}
onMounted(() => {
  handlerInput({ target: { value: props.firstName } })
  handlerInput({ target: { value: props.secondName } }, 'second-name')
})
</script>
<template>
  <input
    class="box"
    @input="(e) => handlerInput(e)"
    placeholder="please enter"
    :value="firstName"
  />
  <input
    class="box"
    @input="(e) => handlerInput(e, 'second-name')"
    placeholder="please enter"
    :value="secondName"
  />
</template>

<style scoped lang="css">
.box {
  border: 1px solid #eee;
  padding: 1em;
  width: 100%;
  line-height: 22px;
  font-size: 24px;
  height: 30px;
  white-space: pre-wrap;
  overflow-y: scroll;
}
.box:empty::before {
  content: attr(placeholder);
  color: #74778a;
  transform: translateY(-4px);
}
.box:focus::before {
  content: none;
}
</style>
