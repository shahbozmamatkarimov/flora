<template>
  <div class="navbar container mx-auto xl:px-28 md:px-10 px-5 mt-[70px]">
    <div class="grid grid-cols-5 sm:py-5 py-3 sm:gap-6 gap-2">
      <form
        class="items-center grid md:grid-cols-3 grid-cols-5 sm:gap-6 gap-2 relative md:col-span-3 col-span-5"
      >
        <div class="flex items-center relative md:col-span-2 col-span-4">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <img class="location" src="../assets/svg/location.svg" alt="" />
          </div>
          <input
            type="text"
            id="input-group-1"
            class="border md:h-14 h-10 border-gray-300 placeholder-gray-800 md:text-lg rounded-xl outline-none block w-full pl-12 p-2.5"
            :placeholder="$t('navbar.address')"
            required
          />
        </div>
        <button
          class="locate md:h-14 h-10 text-center whitespace-nowrap flex items-center justify-center bg-[#5C0099] text-white rounded-xl"
        >
          {{ $t("navbar.show") }}
        </button>
      </form>
      <form class="relative md:col-span-2 col-span-full w-full">
        <input
          type="search"
          class="border md:h-14 h-10 relative border-gray-300 placeholder-gray-800 md:text-lg rounded-xl outline-none block w-full p-2.5"
          :placeholder="$t('navbar.search')"
          required
        />
        <button
          type="submit"
          class="flex justify-center items-center border border-gray-300 border-l-0 absolute top-0 right-0 h-full p-2.5 font-medium bg-[#F3F3F3] rounded-r-xl sm:w-16 w-10"
        >
          <img src="../assets/svg/searchIcon.svg" alt="" />
        </button>
      </form>
    </div>
    <div>
      <ul
        class="flex category gap-6 font-medium text-gray-600 py-1 md:pr-0 pr-10 overflow-hidden overflow-x-auto"
      >
        <li
          @click="productStore.getAllProducts(); $router.push('/')"
          :class="
            productStore.state.sliderStep == 0 ? 'text-[#5C0099] font-bold' : ''
          "
          class="cursor-pointer hover:text-[#5C0099]"
        >
          {{ $t("navbar.all") }}
        </li>
        <li
          @click="productStore.getOneProduct(i.id, index + 1)"
          v-for="(i, index) in productStore.allProducts"
          :key="i.id"
          :class="
            productStore.state.sliderStep == index + 1
              ? 'text-[#5C0099] font-bold'
              : ''
          "
          class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
        >
          <router-link v-if="$t('en') == 'In'" to="/">
            {{ i.uz }}
          </router-link>
          <router-link v-else-if="$t('en') == 'Ан'" to="/">
            {{ i.ru }}
          </router-link>
          <router-link v-if="$t('en') == 'En'" to="/">
            {{ i.en }}
          </router-link>
        </li>
        <li
          :class="
            productStore.state.sliderStep ==
            productStore.allProducts?.length + 1
              ? 'text-[#5C0099] font-bold'
              : ''
          "
          @click="
            productStore.getOneProduct(
              'today',
              productStore.allProducts?.length + 1
            )
          "
          class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
        >
          {{ $t("navbar.presents") }}
        </li>
        <li
          class="cursor-pointer flex items-center gap-1 whitespace-nowrap hover:text-[#5C0099]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11.3C2 11.3 4.7 5 11 5C17.3 5 20 11.3 20 11.3C20 11.3 17.3 17.6 11 17.6C4.7 17.6 2 11.3 2 11.3Z"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9998 14C12.491 14 13.6998 12.7912 13.6998 11.3C13.6998 9.80884 12.491 8.60001 10.9998 8.60001C9.50864 8.60001 8.2998 9.80884 8.2998 11.3C8.2998 12.7912 9.50864 14 10.9998 14Z"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ $t("navbar.watched") }}
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          {{ $t("navbar.orders") }}
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          {{ $t("navbar.favorites") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/products";
const productStore = useProductsStore();

onMounted(() => {
  productStore.getAllProducts();
});
</script>

<style lang="scss" scoped>
.category::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

@media (max-width: 500px) {
  .navbar,
  input {
    font-size: 12px;
  }

  input,
  .locate {
    height: 32px;
    border-radius: 10px;
  }

  .location {
    height: 15px;
  }
}

@media (max-width: 350px) {
  .locate {
    font-size: 9px;
  }
}
</style>
