<template>
  <main>
    <!-- loading products -->
    <section class="mb-7">
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
});
</script>

<style lang="scss" scoped></style>
