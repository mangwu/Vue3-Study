<script setup lang="js">
import Person from '../utils';

defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: rawProps.propB }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  },
  propH: {
    type: [Number, Boolean],
  },
  propI: {
    type: Person,
    required: true,
  }
})
</script>

<template>
  <p>propA: {{ propA }}</p>
  <p>propB: {{ propB }}</p>
  <p>propC: {{ propC }}</p>
  <p>propE: {{ propE }}</p>
  <p>propF: {{ propF }}</p>
  <p>propG(): {{ propG() }}</p>
  <p>propH: {{ propH }}</p>
  <p>propI.getFullName(): {{ propI.getFullName() }}</p>
</template>

<style scoped lang="css">
p {
  height: 20px;
}
</style>
