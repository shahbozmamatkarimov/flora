<template>
    <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-20">
      <!----------------------- Breadcrumb ---------------------------->
      <section>
        <nav class="flex py-6" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li
              class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
            >
              {{ $t("contacts.home") }}
            </li>
            <li>/</li>
            <li
              class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
            >
              <!-- {{ $t("contacts.contact") }} -->
              Просмотренные товары
            </li>
          </ol>
        </nav>
      </section>
      <h1 class="font-medium text-2xl">Просмотренные товары</h1>
      <!----------------------- Breadcrumb end---------------------------->

      <section>
        <div
          v-show="i.product?.length && !productStore.state.isLoading"
          v-for="(i, index) in productStore.allProducts"
          :key="i.id"
        >
          <h1
            :class="index < 1 ? '' : 'sm:pt-7 pt-4'"
            class="sm:text-3xl text-lg -mt-2 pb-1 text-[#242424]"
          >
            {{ i.name }}
          </h1>
          <p class="sm:text-lg text-sm text-[#242424]">
            {{ i.description }}
          </p>
          <div
            class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5"
          >
            <div
              v-show="index < store.data"
              v-for="(product, index) in i.product"
              :key="product.id"
              class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
            >
              <img
                @click="$router.push(`./${product.name}`)"
                class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
                :src="`${baseUrlImage}${product.image[0]?.image}`"
                alt=""
              />
              <div class="md:p-5 p-3">
                <h5
                  class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
                >
                  {{ product.name }}
                </h5>
                <div class="flex justify-between items-center">
                  <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                    <span class="md:inline-block hidden"></span>
                    {{ product.price }}
                    <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
                  </p>
                  <div class="flex items-center sm:gap-3 gap-1">
                    <img
                      class="cursor-pointer"
                      src="../assets/svg/heart.svg"
                      alt=""
                    />

                    <img
                      class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                      src="../assets/svg/cart.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            v-if="i.product.length > store.data"
            class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
          >
            {{ $t("home.show_more") }}
          </button>
        </div>
      </section>
    </main>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  