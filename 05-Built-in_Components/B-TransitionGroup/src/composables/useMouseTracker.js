import { ref, onMounted, onUnmounted } from "vue";

export default function useMouseTracker(nodeRef = window) {
  const x = ref(0);
  const y = ref(0);
  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  onMounted(() => {
    nodeRef.addEventListener("mousemove", update);
  });
  onUnmounted(() => {
    nodeRef.removeEventListener("mousemove", update);
  });
  return { x, y };
}
