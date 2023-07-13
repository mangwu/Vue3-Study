<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import CustomTransition from "./CustomTransition.vue";
import FancyButton from "./FancyButton.vue";
const props = defineProps({
  open: {
    type: Boolean,
    required: true
  },
  mask: {
    // 是否遮罩
    type: Boolean,
    default: true
  },
  maskClosable: {
    // 点击蒙层是否允许关闭
    type: Boolean,
    default: true
  },
  keyboard: {
    // 是否支持键盘 esc 关闭
    type: Boolean,
    default: false
  },
  containerClass: {
    // modal-container 元素的附加类名
    type: String,
    default: ""
  },
  headerClass: {
    // modal-header 元素的附加类名
    type: String,
    default: ""
  },
  bodyClass: {
    // modal-body 元素的附加类名
    type: String,
    default: ""
  },
  footerClass: {
    // modal-footer 元素的附加类名
    type: String,
    default: ""
  }
});
const emit = defineEmits(["close"]);
function escListener(e) {
  if (e.code === "Escape") {
    emit("close");
  }
}
const maskRef = ref(null);
function maskListener(e) {
  if (e.target === maskRef.value) {
    emit("close");
  }
}
onMounted(() => {
  if (props.keyboard) {
    window.addEventListener("keyup", escListener);
  }
  if (props.maskClosable) {
    window.addEventListener("click", maskListener);
  }
});
onUnmounted(() => {
  if (props.keyboard) {
    window.removeEventListener("keyup", escListener);
  }
  if (props.maskClosable) {
    window.removeEventListener("click", maskListener);
  }
});
</script>

<template>
  <Teleport to="body">
    <CustomTransition name="modal">
      <div
        :class="['modal-mask', mask ? 'masked' : '']"
        ref="maskRef"
        v-show="open"
      >
        <div :class="['modal-container', containerClass]">
          <div :class="['modal-header', headerClass]">
            <slot name="header">{{ $translate("modal.1") }}</slot>
          </div>
          <div :class="['modal-body', bodyClass]">
            <slot name="body">{{ $translate("modal.1") }}</slot>
          </div>
          <div :class="['modal-footer', footerClass]">
            <slot name="footer">
              <FancyButton @click="$emit('close')">
                {{ $translate("modal.0") }}
              </FancyButton>
            </slot>
          </div>
        </div>
      </div>
    </CustomTransition>
  </Teleport>
</template>

<style scoped lang="css">
.modal-mask {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 75%;
  min-width: 150px;
  z-index: 9998;
  width: 400px;
  min-height: 100px;
  transform: translate(-50%, -50%);
  user-select: none;
}
.modal-mask.masked {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: none;
}
.masked .modal-container {
  max-width: 75%;
  min-width: 150px;
  width: 400px;
  min-height: 100px;
  max-height: 80%;
  height: fit-content;
}
.modal-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  background-color: var(--color-background-0);
  box-shadow: 0 2px 8px var(--color-box-shadow-3);
  border-radius: 4px;
  padding-bottom: 50px;
}
.modal-header,
h3 {
  margin-top: 0;
  font-size: 20px;
  font-weight: 600;
}
.modal-body {
  min-height: 30px;
}
.modal-footer {
  position: absolute;
  bottom: 15px;
  right: 30px;
}
</style>
