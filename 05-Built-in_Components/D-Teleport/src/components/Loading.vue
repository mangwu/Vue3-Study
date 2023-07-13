<script setup></script>

<template>
  <span class="ant-spin-dot ant-spin-dot-spin">
    <i class="ant-spin-dot-item"></i>
    <i class="ant-spin-dot-item"></i>
    <i class="ant-spin-dot-item"></i>
    <i class="ant-spin-dot-item"></i>
  </span>
</template>

<style scoped lang="css">
@keyframes css-antSpinMove {
  100% {
    opacity: 1;
  }
}
@keyframes css-antRotate {
  100% {
    transform: rotate(405deg);
  }
}
.ant-spin-dot {
  color: var(--color-primary);
  transform: rotate(45deg);
  display: inline-block;
  line-height: 1.5714285714285714;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  font-size: 20px;
  width: 1em;
  height: 1em;
  transform: rotate(45deg);
  animation-name: css-antRotate;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.ant-spin-dot-item {
  position: absolute;
  display: block;
  box-sizing: border-box;
  width: 9px;
  height: 9px;
  background-color: var(--color-primary);
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation-name: css-antSpinMove;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  text-align: center;
  font-size: 20px;
}
.ant-spin-dot-item:nth-child(1) {
  top: 0;
  inset-inline-start: 0;
}
.ant-spin-dot-item:nth-child(2) {
  top: 0;
  inset-inline-end: 0;
  animation-delay: 0.4s;
}
.ant-spin-dot-item:nth-child(3) {
  bottom: 0;
  inset-inline-end: 0;
  animation-delay: 0.8s;
}
.ant-spin-dot-item:nth-child(4) {
  bottom: 0;
  inset-inline-start: 0;
  animation-delay: 1.2s;
}
</style>
