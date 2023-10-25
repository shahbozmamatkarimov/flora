import axios from 'axios';
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.baseURL;

  const state = reactive({
    products: [],
    isLoading: true,
    currentPage: 0,
    total_count: 0,
    total_pages: 0,
    page: 1,
    showProduct: "",
    getById: "",
    isCategory: 0,
    sliderStep: 0,
    openEditModal: false,
  });

  const allProducts = computed(() => state.products);
  const showProductById = computed(() => state.showProduct);

  function getAllProducts() {
    axios.get(baseUrl + '/category')
      .then((res) => {
        console.log(res.data);
        state.products = res.data;
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function getTodays() {
    axios.get(baseUrl + '/product/present')
      .then((res) => {
        console.log(res.data);
        state.showProduct = res.data;
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function getOneProduct(id, index) {
    state.isCategory = index;
    setTimeout(() => {
      state.sliderStep = index;
      if (index == 0) {
        getAllProducts();
        return;
      }
      state.openEditModal = true;
      state.isLoading = true;
      if (id == 'today') {
        getTodays();
        return;
      }
      axios.get(baseUrl + `/category/${id}`)
        .then((res) => {
          console.log(res.data);
          state.showProduct = [res.data];
          state.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300);
  }
  
  function getById(id) {
    state.isLoading = true;
    axios.get(baseUrl + `/product/${id}`)
      .then((res) => {
        console.log(res.data);
        state.getById = res.data;
        state.isLoading = false;
      })
      .catch((err) => {
        state.isLoading = false;
        console.log(err);
      });
  }

  return { state, getAllProducts, getOneProduct, allProducts, showProductById, getById };
});
