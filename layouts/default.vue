<template>
  <div class="bg-[#F9F9F9]">
    <header>
      <Header />
    </header>
    <nav>
      <Navbar />
    </nav>
    <div class="overflow-hidden max-w-screen container mx-auto">
      <!-- <section
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
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <el-select v-model="value" class="m-2" placeholder="Select">
              <el-option
                class="max-w-fit"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.occasion')"
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
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
        </div>
      </section> -->
      <slot />
    </div>
    <Footer class="md:block hidden" />
  </div>
</template>

<script setup>
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const value1 = ref([1,2,3,4,5,6,7]);
const value = ref("Whom");

function handleChange() {
  console.log("hello world");
}
</script>

<style lang="scss" scoped></style>
