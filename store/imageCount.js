import { defineStore } from "pinia";

export const useImageCountStore = defineStore("imageCount", () => {
  const store = reactive({
    width: "",
    data: "",
  });

  const width = computed(() => store.width);
  const data = computed(() => store.data);

  function imageCount() {
    window.addEventListener("resize", () => {
      store.width = window.innerWidth;
      if (store.width < 501) {
        store.data = 4;
      } else if (store.width < 1024) {
        store.data = 6;
      } else {
        store.data = 8;
      }
    });
    store.width = window.innerWidth;
    if (store.width < 501) {
      store.data = 4;
    } else if (store.width < 1024) {
      store.data = 6;
    } else {
      store.data = 8;
    }
    store.width = window.innerWidth;
  }

  return { store, imageCount, width, data };
});
