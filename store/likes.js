import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import axios from 'axios';

export const useLikeStore = defineStore("add_to_like", () => {
  const authStore = useAuthStore();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const store = reactive({
    allFavorites: "",
    isLoading: true,
    currentPage: 0,
    total_count: 0,
    total_pages: 0,
    page: 1,
  });

  function getFavorites() {
    store.isLoading = true;
    const client_id = localStorage.getItem("user_id");
    axios
      .get(baseUrl + "/like/clientId/" + client_id)
      .then((res) => {
        console.log(res.data);
        store.allFavorites = res.data;
        store.isLoading = false;
      })
      .catch((err) => {
        store.isLoading = false;
        console.log(err);
      });
  }
  

  return { store, getFavorites };
});
