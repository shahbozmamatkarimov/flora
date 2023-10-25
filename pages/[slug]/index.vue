<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5">
    <!----------------------- Breadcrumb ---------------------------->
    <section>
      <nav class="sm:flex hidden py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            class="inline-flex cursor-pointer items-center font-medium text-gray-700 hover:text-blue-600"
          >
            Главная
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Все категории
          </li>
          <li>/</li>
          <li class="ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">
            {{ useProduct?.state.getById?.name }}
          </li>
        </ol>
      </nav>
      <button
        class="flex items-center justify-center bg-gray-200 rounded-md px-5 my-3 py-1 gap-2 sm:hidden"
      >
        <i class="bx bx-arrow-back pt-1"></i> назад
      </button>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <section class="flex md:flex-row flex-col gap-10 w-full">
      <!---------------------- carousel -------------------------->
      <div class="max-w-[524px] w-full overflow-hidden">
        <div
          v-if="useProduct?.state.getById"
          class="flex max-w-[524px] bg-white rounded-xl duration-1000"
          id="carouselMain"
        >
          <img
            v-for="i in useProduct?.state.getById?.image"
            :key="i"
            class="min-w-[524px] h-[524px] bg-white object-contain rounded-xl border border-gray-200 object-center"
            :src="baseUrlImage + i.image"
            alt=""
          />
        </div>
        <div
          v-if="useProduct?.state.getById?.image?.length > 1"
          id="carousel"
          class="grid grid-cols-5 gap-[10px] mt-[10px]"
        >
          <img
            v-for="(i, index) in useProduct?.state.getById?.image"
            @click="store.slideStep = index + 1"
            :key="index"
            :class="store.slideStep == index + 1 ? 'border-black p-1' : ''"
            class="h-[110px] bg-white w-full cursor-pointer duration-500 object-contain border border-gray-200 rounded-lg"
            :src="baseUrlImage + i.image"
            alt=""
          />
        </div>
      </div>

      <!---------------------- carousel end -------------------------->

      <!---------------------- about flower -------------------------->

      <div class="w-full leading-10">
        <ul class="border-b-2 pb-2">
          <li
            class="flex flex-wrap w-full justify-between font-semibold items-center"
          >
            <h2><span>Артикул:</span><span> 333014199</span></h2>
            <p class="flex items-center gap-3">
              <i class="bx bx-heart text-lg"></i>В желания
            </p>
          </li>
          <li class="lg:text-2xl text-lg font-semibold">
            {{ useProduct?.state.getById?.name }}
          </li>
          <li>
            <p class="flex items-center gap-2">
              <i class="bx bxs-star text-[#FFA500]"></i>0.0 Оценок пока нет
            </p>
          </li>
          <li class="flex flex-wrap">
            <p class="w-24">Продавец:</p>
            <p class="font-bold">BOTANICA Department of flowers</p>
          </li>
          <li class="flex flex-wrap">
            <p class="w-24">Доставка:</p>
            <p class="font-bold">бесплатно</p>
          </li>
        </ul>
        <ul class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 pt-2">
          <li>
            <h2>Цена:</h2>
            <p class="font-bold">{{ useProduct.getById?.price }} uzs</p>
          </li>
          <li>
            <h2>Количество:</h2>
            <div class="custom-number-input h-10 w-32">
              <div
                class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
              >
                <button
                  data-action="decrement"
                  class="bg-[#EEEEEE] text-gray-600 px-1 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span class="m-auto text-2xl font-bold">−</span>
                </button>
                <input
                  type="number"
                  min="1"
                  max="999"
                  class="outline-none focus:outline-none border-none text-center w-full bg-[#EEEEEE] font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
                  name="custom-input-number"
                  value="1"
                />
                <button
                  data-action="increment"
                  class="bg-[#EEEEEE] text-gray-800 px-1 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                  <span class="m-auto text-2xl font-bold">+</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div class="grid grid-cols-2 gap-5 my-5">
          <button
            class="md:text-md text-sm sm:h-16 h-12 bg-[#5C0099] active:opacity-50 text-white font-semibold rounded-xl border border-[#5C0099]"
          >
            Добавить в корзину
          </button>
          <button
            @click="$router.push('/order')"
            class="md:text-md text-sm sm:h-16 h-12 text-[#5C0099] active:opacity-50 rounded-xl font-semibold border border-[#5C0099]"
          >
            Купить в 1 клик
          </button>
        </div>
        <div>
          <h1 class="font-bold text-lg">Сocтaв</h1>
          <ul class="ul pl-8 leading-9">
            <li>Ваксфлауэр - 2 шт.</li>
            <li>Эвкалипт - 2 шт.</li>
            <li>Роза пионовидная - 11 шт.</li>
            <li>Упаковка дизайнерская - 1 шт.</li>
          </ul>
        </div>
      </div>

      <!---------------------- about flower end -------------------------->
    </section>

    <!------------------------ same flowers ----------------------------->

    <section>
      <h1 class="sm:text-3xl sm:pt-16 pt-12 sm:pb-2 text-md">
        Другие товары этого магазина
      </h1>
      <div class="flex overflow-hidden overflow-x-auto cards gap-5">
        <div
          v-for="i in 10"
          :key="i"
          class="card 2xl:min-w-[310px] xl:min-w-[247px] lg:min-w-[220px] md:min-w-[212px] sm:min-w-[185px] min-w-[150px] my-5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img
            class="img rounded-t-lg 2xl:h-72 xl:h-64 md:h-52 sm:h-44 h-40 w-full object-cover"
            src="../../assets/image/image2.png"
            alt=""
          />
          <div class="md:p-5 p-3">
            <h5
              class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
            >
              Фрида Кало
            </h5>
            <div class="flex justify-between items-center">
              <p class="sm:text-md text-xs whitespace-nowrap">
                <span class="md:inline-block hidden">от</span> 1 350 000
                <span class="sm:inline hidden">сум</span>
              </p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img
                  class="cursor-pointer"
                  src="../../assets/svg/heart.svg"
                  alt=""
                />
                <img
                  class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                  src="../../assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-20">
      <h1 class="sm:text-3xl pb-2 text-md">Просмотренные товары</h1>
      <div class="flex overflow-hidden overflow-x-auto cards gap-5">
        <div
          v-for="i in 10"
          :key="i"
          class="card 2xl:min-w-[310px] xl:min-w-[247px] lg:min-w-[220px] md:min-w-[212px] sm:min-w-[185px] min-w-[150px] my-5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img
            class="img rounded-t-lg 2xl:h-72 xl:h-64 md:h-52 sm:h-44 h-44 w-full object-cover"
            src="../../assets/image/image5.png"
            alt=""
          />
          <div class="md:p-5 p-3">
            <h5
              class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
            >
              Фрида
            </h5>
            <div class="flex justify-between items-center">
              <p class="sm:text-md text-xs whitespace-nowrap">
                <span class="md:inline-block hidden">от</span> 1 350 000
                <span class="sm:inline hidden">сум</span>
              </p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img
                  class="cursor-pointer"
                  src="../../assets/svg/heart.svg"
                  alt=""
                />

                <img
                  class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                  src="../../assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// import { useProductsStore, useHistoryStore } from "@/store";

// const useProduct = useProductsStore();
// const useHistory = useHistoryStore();

const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const router = useRouter();
const store = reactive({
  slideStep: 1,
  product_id: "",
});

watch(
  () => store.slideStep,
  () => {
    document.getElementById("carouselMain").style.transform = `translateX(-${
      store.slideStep * 100 - 100
    }%)`;
  }
);

onMounted(() => {
  store.product_id = +router.currentRoute.value.params.slug;
  useProduct.getById(store.product_id);
  useHistory.addToWatched(store.product_id)
});
</script>

<style lang="scss" scoped>
input:focus {
  outline: none !important;
  outline: 0 !important;
}

.ul {
  list-style-type: disc;
}
</style>
