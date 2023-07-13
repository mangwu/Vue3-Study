import { ref, onMounted, onUnmounted } from "vue";

export default function useWindowSize() {
  const size = ref({ width: 0, height: 0 });
  function resize() {
    size.value.width = window.innerWidth;
    size.value.height = window.innerHeight;
  }
  onMounted(() => {
    resize();
    window.addEventListener("resize", resize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });
  return size;
}
