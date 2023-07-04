import { onMounted, onUnmounted } from "vue";
export default function useMountedCallback(mountedCallback, unmountedCallback) {
  onMounted(mountedCallback);
  onUnmounted(unmountedCallback);
}
