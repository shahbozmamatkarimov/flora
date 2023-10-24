<template>
  <div class="fixed top-0 z-50 w-full">
    <div class="flex flex-wrap h-[70px]">
      <section class="relative mx-auto">
        <!-- navbar -->
        <nav
          class="navbar flex h-[70px] justify-between bg-gray-900 text-white w-screen"
        >
          <div
            class="container mx-auto xl:px-28 md:px-10 px-5 py-6 flex w-full items-center justify-between"
          >
            <router-link to="/">
              <img
                class="logo h-[40px] cursor-pointer"
                src="../public/logo.webp"
                alt="logo"
              />
            </router-link>
            <!-- Nav Links -->
            <ul
              class="hidden xl:flex px-4 text-lg mx-auto font-semibold font-heading space-x-12"
            >
              <li>
                <router-link class="hover:text-gray-200" to="/about">{{
                  $t("about")
                }}</router-link>
              </li>
              <li>
                <router-link class="hover:text-gray-200" to="/buy_and_order">{{
                  $t("payment_and_delivery")
                }}</router-link>
              </li>
              <li>
                <router-link
                  class="hover:text-gray-200"
                  to="/quality_assurance"
                  >{{ $t("quality_assurance") }}</router-link
                >
              </li>
              <li>
                <router-link class="hover:text-gray-200" to="/contact">{{
                  $t("contact")
                }}</router-link>
              </li>
            </ul>
            <!-- Header Icons -->
            <div class="flex items-center">
              <div class="flex items-center gap-2 cursor-pointer sm:mr-7 mr-3">
                <img src="../assets/svg/cartWhite.svg" alt="cart" />
                <p class="font-semibold hover:text-gray-200 sm:block hidden">
                  {{ $t("basket") }}
                </p>
              </div>
              <div
                class="sm:flex hidden items-center gap-2 xl:mr-0 mr-10 hover:text-gray-200 cursor-pointer"
              >
                <img src="../assets/svg/user.svg" alt="" />
                <p class="font-semibold sm:block hidden">{{ $t("login") }}</p>
              </div>
              <div class="xl:flex hidden items-center ml-7">
                <a-dropdown>
                  <div class="ant-dropdown-link cursor-pointer" @click.prevent>
                    <p
                      v-if="$t('en') === 'In'"
                      class="flex w-12 gap-2"
                      href="javascript:;"
                    >
                      <img
                        class="w-6 h-6 object-cover rounded-full"
                        src="../assets/lang/uz.svg"
                        alt=""
                      />
                      {{ $t("uz") }}
                    </p>
                    <p
                      v-else-if="$t('uz') === 'Ан'"
                      class="flex w-12 gap-2"
                      href="javascript:;"
                    >
                      <img
                        class="w-6 h-6 object-cover rounded-full"
                        src="../assets/lang/ru.svg"
                        alt=""
                      />
                      {{ $t("uz") }}
                    </p>
                    <p
                      v-else
                      class="flex w-12 gap-2"
                      href="javascript:;"
                    >
                      <img
                        class="w-6 h-6 object-cover rounded-full"
                        src="../assets/lang/en.svg"
                        alt=""
                      />
                      {{ $t("en") }}
                    </p>
                  </div>
                  <template #overlay>
                    <a-menu @click="({ key }) => ($i18n.locale = key)">
                      <a-menu-item key="uz">
                        <div class="flex w-12 gap-2">
                          <img
                            class="w-6 h-6 object-cover rounded-full"
                            src="../assets/lang/uz.svg"
                            alt=""
                          />
                          {{ $t("uz") }}
                        </div>
                      </a-menu-item>
                      <a-menu-item key="en">
                        <div class="flex w-12 gap-2">
                          <img
                            class="w-6 h-6 object-cover rounded-full"
                            src="../assets/lang/en.svg"
                            alt=""
                          />
                          {{ $t("en") }}
                        </div>
                      </a-menu-item>
                      <a-menu-item key="ru">
                        <div class="flex w-12 gap-2">
                          <img
                            class="w-6 h-6 object-cover rounded-full"
                            src="../assets/lang/ru.svg"
                            alt=""
                          />
                          {{ $t("ru") }}
                        </div>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
              <div>
                <!-- Responsive navbar -->
                <p
                  @click="
                    store.toggle = !store.toggle;
                    store.lang = false;
                  "
                  class="navbar-burger hover:text-gray-200 text-3xl pt-2 cursor-pointer self-center xl:hidden"
                >
                  <i class="bx bx-menu"></i>
                </p>
                <ul
                  :class="store.toggle ? 'h-0' : 'h-56'"
                  class="overflow-hidden duration-500 container xl:hidden flex flex-col w-full right-0 left-0 top-[70px] bg-white text-gray-700 shadow-md rounded z-50 absolute mx-auto font-semibold font-heading"
                >
                  <li class="flex justify-between font-semibold items-center">
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/about"
                      >O нас</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/buy_and_order"
                      >Оплата и доставка</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/quality_assurance"
                      >Гарантия качества</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/contact"
                      >Контакты</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  </div>
</template>

<script setup>
const store = reactive({
  toggle: true,
  lang: false,
});
</script>

<style lang="scss" scoped>
.navbar {
  background-image: url("../assets/images/navbar.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 400px) {
  .logo {
    height: 30px;
  }

  .icon {
    font-size: 18px;
  }

  .cart {
    height: 20px;
    width: 20px;
  }
}
</style>
