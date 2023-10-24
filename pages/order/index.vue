<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-[15rem]">
    <section class="grid xl:grid-cols-2 gap-16">
      <div>
        <h1 class="font-semibold sm:text-2xl text-xl py-5">
          Оформление заказа
        </h1>
        <ul class="leading-10">
          <li>
            <p class="font-semibold sm:text-2xl text-xl sm:py-5 py-3">
              Кто получит букет?
            </p>
            <div class="grid grid-cols-2 gap-5 sm:h-[53px]">
              <button
                @click="store.for = 2"
                :class="
                  store.for == 2 ? 'border-[#5C0099]' : 'border-[#D9D9D9]'
                "
                class="h-full border-2 rounded"
              >
                Другой человек
              </button>
              <button
                @click="store.for = 1"
                :class="
                  store.for == 1 ? 'border-[#5C0099]' : 'border-[#D9D9D9]'
                "
                class="h-full border-2 rounded"
              >
                Я сам
              </button>
            </div>
          </li>
          <li>
            <h1 class="font-semibold sm:text-2xl text-xl pt-7 pb-1">
              Ваши контакты
            </h1>
            <div class="grid grid-cols-2 gap-5">
              <p>Фамилия *</p>
              <p>Имя *</p>
            </div>
          </li>
        </ul>
        <div class="grid grid-cols-2 gap-5 sm:h-[53px]">
          <input
            type="text"
            class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
            placeholder="Введите фамилия"
            required
          />
          <input
            type="text"
            class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
            placeholder="Введите имя"
            required
          />
        </div>
        <p class="text-[#5C0099] pl-4 py-2">Укажите, пожалуйста, фамилия</p>
        <p class="py-2">
          Мы пришлем уведомление о статусе заказа на указанный вами телефон.
          Курьер свяжется с вами по телефону для уточнения времени доставки.
        </p>
        <h1 class="pt-2 pb-4">Номер телефона *</h1>
        <div class="grid sm:grid-cols-2 gap-5 sm:h-[53px]">
          <input
            type="tel"
            class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
            placeholder="+998 __ ___-__-__"
            required
          />
        </div>

        <div v-show="store.for == 2">
          <div>
            <h1 class="font-semibold sm:text-xl text-xl py-5">
              Контакты получателя
            </h1>
          </div>
          <div class="grid grid-cols-2 pb-2 gap-5">
            <p>Имя *</p>
            <p>Номер телефона *</p>
          </div>

          <div class="grid grid-cols-2 gap-5 sm:h-[53px]">
            <input
              type="text"
              class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
              placeholder="Введите имя"
              required
            />
            <input
              type="tel"
              class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
              placeholder="+998 __ ___-__-__"
              required
            />
          </div>
        </div>
        <hr class="my-5" />

        <!------------------------ Yetkazib berish ------------------------------->
        <ul class="leading-10">
          <li>
            <h1 class="text-2xl font-semibold py-3">Доставка</h1>
          </li>
          <li class="flex items-center">
            <img src="../../assets/svg/location1.svg" alt="" />
            <select
              class="text-[#5C0099] border-none rounded bg-transparent outline-none"
            >
              <option value="1">Ташкент</option>
              <option value="1">Ташкент</option>
              <option value="1">Ташкент</option>
            </select>
          </li>
          <li>
            <h1 class="font-semibold text-xl pt-3 pb-5">Адрес доставки</h1>
            <input
              class="md:h-14 h-10 w-full bg-transparent placeholder-[#454545] border-2 border-[#D9D9D9] rounded"
              type="text"
              placeholder="Улица и номер дома"
            />
            <p class="text-[#5C0099] pl-4 pb-4">Укажите, пожалуйста, фамилия</p>
            <div>
              <ul>
                <li
                  class="grid sm:grid-cols-3 grid-cols-2 ext-gray-700 h-14 -my-3 gap-5"
                >
                  <p>Квартира/офис</p>
                  <p>Подъезд</p>
                  <p class="sm:pt-0 pt-5">Этаж</p>
                </li>
                <li
                  class="grid sm:grid-cols-3 grid-cols-2 sm:pb-0 pb-24 md:h-14 h-10 gap-5"
                >
                  <input
                    class="h-full col-span-1 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                    type="text"
                  />
                  <input
                    class="h-full col-span-1 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                    type="text"
                  />
                  <input
                    class="sm:h-full h-10 sm:mt-0 mt-3 sm:col-span-1 col-span-2 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                    type="text"
                  />
                </li>
              </ul>
            </div>
          </li>
          <li class="leading-7 pt-5">
            <h1 class="text-gray-700 py-2">Комментарий для курьера</h1>
            <textarea
              class="h-20 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
            ></textarea>
            <p>
              Например, куда именно привезти заказ, ближайший адрес или ориентир
            </p>
          </li>
          <li v-show="store.for == 2">
            <div class="flex items-center gap-5">
              <h1 class="text-xl font-semibold py-2 mb-1">
                Бесплатная открытка
              </h1>

              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="store.is_message" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C0099]"
                ></div>
              </label>
            </div>
            <div v-show="store.is_message">
              <label for="convert" class="text-gray-700 py-2"
                >Текст открытки…</label
              >
              <textarea
                id="convert"
                class="h-20 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                placeholder="Мой дорогой..."
              ></textarea>
            </div>
          </li>
          <li>
            <h1 class="font-semibold text-xl pt-7">Дата и время доставки</h1>
            <div class="grid sm:grid-cols-2 gap-5 my-5 sm:h-14">
              <input
                class="w-full bg-transparent border-2 border-[#D9D9D9] rounded"
                type="date"
              />
              <input
                class="w-full bg-transparent border-2 border-[#D9D9D9] rounded"
                type="time"
                step="3600"
                min="00:00"
                max="23:59"
              />
            </div>
          </li>
          <li>
            <p
              class="flex items-center text-lg gap-5 px-5 my-5 rounded text-[#45D469] bg-green-100 h-16"
            >
              <svg
                class="sm:scale-0 scale-150"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00015 16.17L5.53015 12.7C5.34317 12.513 5.08957 12.408 4.82515 12.408C4.56072 12.408 4.30712 12.513 4.12015 12.7C3.93317 12.887 3.82813 13.1406 3.82812 13.405C3.82813 13.5359 3.85391 13.6656 3.90402 13.7866C3.95412 13.9075 4.02756 14.0174 4.12015 14.11L8.30015 18.29C8.69015 18.68 9.32015 18.68 9.71015 18.29L20.2901 7.71002C20.4771 7.52304 20.5822 7.26944 20.5822 7.00502C20.5822 6.74059 20.4771 6.48699 20.2901 6.30002C20.1032 6.11304 19.8496 6.008 19.5851 6.008C19.3207 6.008 19.0671 6.11304 18.8801 6.30002L9.00015 16.17Z"
                  fill="#45D469"
                />
              </svg>
              Доставим заказ 16 июля с 10:00 до 12:00
            </p>
          </li>
          <li class="flex gap-3 items-center">
            <input
              class="border-2 border-[#D9D9D9] rounded"
              id="check"
              type="checkbox"
            />
            <label class="text-lg" for="check"
              >Хочу получать информация о скидках и акциях</label
            >
          </li>
        </ul>
        <hr class="my-5" />
        <h1 class="text-2xl font-semibold my-5">Способ оплаты</h1>
        <div class="grid sm:h-20 sm:grid-cols-2 gap-5">
          <label
            @click="store.payment = 1"
            :class="{ 'ring-2 ring-[#5C0099]': store.payment == 1 }"
            class="flex h-20 justify-between items-center cursor-pointer active:ring-2 px-5 py-2 rounded bg-[#F1F1F1]"
          >
            <div>
              <h1 class="py-2">Картой онлайн</h1>
              <div class="flex items-center gap-5">
                <img src="../../assets/svg/humo.svg" alt="" />
                <img src="../../assets/svg/uzcard.svg" alt="" />
              </div>
            </div>
            <input type="radio" name="select" />
          </label>
          <label
            @click="store.payment = 2"
            :class="{ 'ring-2 ring-[#5C0099]': store.payment == 2 }"
            class="flex justify-between items-center cursor-pointer h-20 px-5 py-2 rounded border-2 border-[#F1F1F1]"
          >
            <div>
              <h1>При получении</h1>
              <p>Наличными или картой</p>
            </div>
            <input type="radio" name="select" />
          </label>
        </div>
      </div>
      <div class="xl:mt-16">
        <div
          class="border-2 sticky top-24 max-h-fit border-[#D9D9D9] rounded-xl sm:p-7 p-4"
        >
          <h1 class="sm:pb-5 pb-3 font-semibold text-2xl">Состав заказа</h1>
          <table class="w-full">
            <tbody class="w-full">
              <th class="tableImg flex w-full text-start">
                <img
                  class="img sm:w-40 w-20 min-w-[5rem] sm:min-w-[10rem] mr-2 sm:h-32 h-16 object-cover object-top rounded-md"
                  src="../../assets/image/image8.png"
                  alt="Jese image"
                />
                <div class="pl relative pl-3 w-full">
                  <div class="flex w-full items-start justify-between">
                    <h1
                      class="sm:font-bold font-semibold lg:text-md sm:text-lg text-sm xl:w-[70%] w-[90 %] overflow-hidden"
                    >
                      Букет из "9 кустовых хризантем с эвкалиптом 😍
                    </h1>
                    <img
                      class="cursor-pointer"
                      src="../../assets/svg/x.svg"
                      alt="x"
                    />
                  </div>
                  <p
                    class="price pb-5 font-normal sm:text-md text-xs text-gray-500 sm:pt-2 py-2"
                  >
                    Cтандартний
                  </p>
                  <p
                    class="flex justify-between sm:text-md text-sm w-full absolute bottom-0"
                  >
                    <span class="font-normal">1 шт.</span
                    ><span class="font-semibold pr-3">800 000 сум</span>
                  </p>
                </div>
              </th>
            </tbody>
          </table>
          <hr class="sm:my-5 my-2" />
          <div class="flex justify-between items-center">
            <p>Доставка</p>
            <p class="font-semibold">Бесплатно</p>
          </div>
          <hr class="sm:my-5 my-2" />
          <div class="flex justify-between py-2 items-center">
            <p>Общая стоимость</p>
            <p class="font-semibold">800 000 сум</p>
          </div>
          <button
            class="sm:h-16 h-10 sm:my-5 my-2 flex justify-center sm:text-md text-sm items-center w-full font-semibold text-white rounded-xl bg-[#5C0099]"
          >
            Оформить заказ
          </button>
          <h1 class="sm:text-md text-sm">
            Нажимая на кнопку, вы соглашаетесь с условиями оказания услуг и
            политикой обработки персональных данных
          </h1>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const store = reactive({
  payment: 0,
  for: 1,
  is_message: false,
});
</script>

<style lang="scss" scoped>
@media (max-width: 350px) {
  .tableImg {
    display: block;
  }

  .img {
    height: 150px;
    width: 100%;
  }

  .pl {
    padding-left: 0;
    padding-top: 7px;
  }
  .price {
    padding-bottom: 25px;
    padding-top: 5px;
  }
}
</style>
