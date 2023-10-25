import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
  const store = reactive({
    isLoading: false,
    loadingTypes: [],
    searchRes: null,
    pageName: "",
  });

  function addLoading(type) {
    if (!store.loadingTypes?.includes(type)){
      store.loadingTypes.push(type);
    }
  }
  
  function removeLoading(type) {
    if (store.loadingTypes?.includes(type)){
      store.loadingTypes = store.loadingTypes?.filter((fruit) => fruit !== type);
    }
  }
 
  function isLoadingType(type){ 
    console.log(store.loadingTypes?.includes(type));
    return store.loadingTypes?.includes(type)
  }

  return { store, addLoading, removeLoading, isLoadingType };
});
