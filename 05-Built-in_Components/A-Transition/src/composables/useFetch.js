import { ref, watch, onUnmounted, isRef } from "vue";

export default function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const stop = ref(() => {});
  const doFetch = () => {
    data.value = null;
    error.value = null;
    fetch(url.value)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`GET ${res.url} ${res.status}.`);
        }
      })
      .then((json) => (data.value = json))
      .catch((err) => {
        console.log(err);
        error.value = err;
      });
  };
  if (isRef(url)) {
    stop.value = watch(url, doFetch, { immediate: true });
  } else {
    doFetch();
  }
  onUnmounted(() => stop.value());
  return { data, error };
}
