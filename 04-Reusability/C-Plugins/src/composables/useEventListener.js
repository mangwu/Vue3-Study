import useMountedCallback from "./useMountedCallback";
export default function useEventListener(target, eventType, callback) {
  useMountedCallback(
    () => target.addEventListener(eventType, callback),
    () => target.removeEventListener(eventType, callback)
  );
}
