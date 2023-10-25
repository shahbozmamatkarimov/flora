<template>
  <main>
    <nav class="navbar container mx-auto xl:px-28 md:px-10 px-5 mt-[70px]">
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
            class="cursor-pointer hover:text-[#5C0099]"
          >
            {{ $t("navbar.all") }}
          </li>
          <li
            class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
          >
            <!-- <router-link v-if="$t('en') == 'In'" to="/">
              {{ i.uz }}
            </router-link>
            <router-link v-else-if="$t('en') == 'Ан'" to="/">
              {{ i.ru }}
            </router-link>
            <router-link v-if="$t('en') == 'En'" to="/">
              {{ i.en }}
            </router-link> -->
          </li>
          <li
            
            class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
          >
            {{ $t("navbar.presents") }}
          </li>
          <li
            @click="$router.push('/history')"
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
          <li
            @click="$router.push('/favorites')"
            class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
          >
            {{ $t("navbar.favorites") }}
          </li>
        </ul>
      </div>
    </nav>

    <el-dialog
      v-if="isMount"
      close-icon="false"
      width="30%"
      align-center
    >
      <!-- <form v-loading="authStore.store.isLoading" @submit.prevent="authStore.handleSubmit()">
        <h1 class="font-semibold text-2xl leading-7">Введите номер телефона</h1>
        <p class="leading-6 mt-[14px] mb-5">
          Напишите номер своего мобильного телефона и вам придет СМС с кодом для
          входа
        </p>
        <h1 class="leading-[21px]">Номер телефона *</h1>
        <input
          v-model="authStore.store.phone"
          :class="!authStore.store.isVerified ? 'border !border-[#EC3434]' : ''"
          class="h-14 mt-[6px] mb-[55px] rounded-[10px] w-full"
          type="text"
          placeholder="+998 99 999 99 99"
        />
        <label for="1">
          <button
            class="h-14 bg-[#5C0099] rounded-xl w-full text-white text-semibold leading-5"
          >
            Получить СМС с кодом
          </button>
        </label>
        <p class="text-sm leading-5 mt-[30px]">
          Avtotizatsiyadan o'tish orqali siz
          <span class="underline"
            >shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik
            bildirasiz</span
          >
        </p>
      </form> -->
    </el-dialog>

    <el-dialog
      v-if="isMount"
      close-icon="false"
      width="30%"
      align-center
    >
      <!-- <form v-loading="authStore.store.isLoading" @submit.prevent="authStore.verifyOtp()">
        <h1 class="font-semibold text-2xl leading-7">Tasdiqlash kodi</h1>
        <p class="leading-6 mt-[14px] mb-5">
          Tasdiqlash kodi +998 99 *** ** 03 raqamiga yuborilgan
        </p>
        <div class="flex items-center justify-center text-2xl gap-[10px]">
          <input
            id="1"
            @input="(e) => nextNumber(e, 2)"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
          <input
            @input="(e) => nextNumber(e, 3)"
            id="2"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
          <input
            @input="(e) => nextNumber(e, 4)"
            id="3"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
          <input
            @input="(e) => nextNumber(e, 5)"
            id="4"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
        </div>
        <button
          class="h-14 bg-[#5C0099] rounded-xl w-full text-white text-semibold leading-5"
        >
          Kodni tasdiqlash
        </button>
      </form> -->
    </el-dialog>
  </main>
</template>

<script setup>
// import { useProductsStore, useAuthStore } from "@/store";
// const productStore = useProductsStore();
// const authStore = useAuthStore();
const isMount = ref(false);

const store = reactive({
  loginModal: false,
  otpStep: 1,
});

function nextNumber(e, val) {
  if (val != 5) {
    store.otpStep = val;
  } else {
    store.otpStep = 5;
  }
  // authStore.store.otp.push(document.getElementById(val - 1)?.value);
  if (e.inputType === "deleteContentBackward") return;
  console.log("hello");
  document.getElementById(val)?.focus();
}

onMounted(() => {
  isMount.value = true;
  // productStore?.getAllProducts();

  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      // authStore.store.otp = [];
      const otp = document.querySelectorAll(".otp");
      for (let i of otp) {
        i.value = "";
      }
      document.getElementById(1)?.focus();
    }
  });
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
