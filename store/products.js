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
    isCategory: 0,
    sliderStep: 0,
    openEditModal: false,
  });

  const allProducts = computed(() => state.products);
  const showProductById = computed(() => state.showProduct);

  function getAllProducts() {
    state.showProduct = "";
    state.isCategory = 0;
    state.sliderStep = 0;
    state.isLoading = true;
    fetch(baseUrl + `/category`)
      .then((res) => res.json())
      .then((res) => {
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        console.log(res);
        state.products = res;
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTodays() {
    fetch(baseUrl + "/product/present")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        state.showProduct = res;
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
      if (id == "today") {
        getTodays();
        return;
      }
      fetch(baseUrl + `/category/${id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          state.showProduct = [res];
          state.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300);
  }

  return { state, getAllProducts, getOneProduct, allProducts, showProductById };
});
