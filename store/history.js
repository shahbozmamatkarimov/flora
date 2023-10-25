import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import axios from "axios";

export const useHistoryStore = defineStore("watched", () => {
  const authStore = useAuthStore();
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const store = reactive({
    allHistory: "",
    isLoading: true,
    currentPage: 0,
    total_count: 0,
    total_pages: 0,
    page: 1,
  });

  function getHistory() {
    store.isLoading = true;
    const client_id = localStorage.getItem("user_id");
    axios
      .get(baseUrl + "/watched/clientId/" + client_id)
      .then((res) => {
        console.log(res.data);
        store.allHistory = res.data;
        store.isLoading = false;
      })
      .catch((err) => {
        store.isLoading = false; 
        console.log(err);
      });
  }

  function addToWatched(product_id) {
    const client_id = localStorage.getItem("user_id");
    axios
      .post(baseUrl + "/watched", {
        client_id,
        product_id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        // document.getElementById(id)?.classList?.toggle("hidden");
        // document.getElementById("id" + id)?.classList?.toggle("hidden");
        authStore.store.loginModal = true;
        console.log(err);
      });
  }

  return { store, getHistory, addToWatched };
});
