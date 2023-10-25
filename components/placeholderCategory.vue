<template>
  <main>
    <!-- loading categories -->
    <section class="flex md:gap-7 gap-5 sm:py-10 py-5">
      <div id="default-carousel" class="relative w-full">
        <!-- Carousel wrapper -->
        <div
          class="carousel relative lg:h-[300px] md:h-60 sm:h-48 h-52 overflow-hidden rounded-xl"
        >
          <!-- Item 1 -->
          <div class="bg-gray-200 h-full w-full animate-pulse"></div>
        </div>

        <!-- Slider controls -->
        <button
          type="button"
          class="absolute pointer-events-none top-0 left-0 z-30 flex items-center justify-center h-full sm:px-4 px-2 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center sm:w-10 sm:h-10 w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 sm:group-focus:ring-4 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="sm:w-4 sm:h-4 w-2 h-2 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute pointer-events-none top-0 right-0 z-30 flex items-center justify-center h-full sm:px-4 px-2 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center sm:w-10 sm:h-10 w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 sm:group-focus:ring-4 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="sm:w-4 sm:h-4 w-2 h-2 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div
        class="relative bg-gray-200 animate-pulse rounded-xl w-[320px] lg:min-w-[320px] md:min-w-[250px] min-w-[200px] lg:h-[300px] md:h-60 sm:h-48 sm:block hidden"
      >
        <p
          class="absolute bg-gray-300 h-10 w-[70px] right-0 px-4 py-2 rounded-es-xl rounded-se-xl"
        ></p>
      </div>
    </section>

    <!-- loading products -->
    <section class="mb-7" v-for="i in 3" :key="i">
      <h1 class="bg-gray-200 h-8 rounded-2xl w-60 animate-pulse"></h1>
      <p class="bg-gray-200 h-6 rounded-2xl w-1/2 mt-2 animate-pulse"></p>
      <div class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5">
        <div
          v-for="i in store.data"
          :key="i"
          class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <div
            class="img border bg-gray-200 animate-pulse rounded-t-lg 2xl:h-80 xl:h-64 md:h-52 sm:h-44 h-44 w-full object-cover"
          ></div>
          <div class="md:p-5 p-3">
            <h5
              class="bg-gray-200 rounded-2xl w-24 -mt-1 mb-1 h-5 animate-pulse"
            ></h5>
            <div class="flex justify-between items-center">
              <p class="bg-gray-200 rounded-2xl w-28 h-5 animate-pulse"></p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img
                  class="animate-pulse -mr-1"
                  src="../assets/svg/heartLoad.svg"
                  alt=""
                />

                <img
                  class="animate-pulse"
                  src="../assets/svg/cartLoad.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-gray-200 animate-pulse w-full lg:h-14 h-10 border-2 rounded-xl duration-500 hover:text-white"
      ></button>
    </section>
  </main>
</template>

<script setup>

const store = reactive({
  width: "",
  data: 8,
});

onBeforeMount(() => {
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
  // initFlowbite();
});
</script>

<style lang="scss" scoped></style>
