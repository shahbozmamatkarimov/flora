<template>
  <div class="bg-[#F9F9F9]">
    <header>
      <Header />
    </header>
    <nav>
      <Navbar />
    </nav>
    <div class="overflow-hidden max-w-screen container mx-auto">
      <section
        v-if="$router.currentRoute.value.fullPath == '/'"
        class="container mx-auto xl:px-28 md:px-10 px-5 pb-5"
      >
        <div
          class="filter font-medium text-[#454545cf] flex sm:md:gap-7 gap-5 py-3 border-b-2"
        >
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.whom')"
              @focus="focus"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.occasion')"
              @focus="focus"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.color')"
              @focus="focus"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.price')"
              @focus="focus"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
        </div>
      </section>
      <slot />
    </div>
    <Footer class="md:block hidden" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
