import { ref } from "vue";
import useEventListener from "./useEventListener";

export default function useMouseTracker(nodeRef = window) {
  const x = ref(0);
  const y = ref(0);
  useEventListener(nodeRef, "mousemove", (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  });
  return { x, y };
}
