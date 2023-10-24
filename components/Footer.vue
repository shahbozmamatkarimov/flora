<template>
  <footer class="bg-[#FFFFFF] pt-20">
    <div
      class="footer grid lg:grid-cols-6 grid-cols-5 overflow-hidden container mx-auto xl:px-28 md:px-10 px-5"
    >
      <div>
        <img class="w-28" src="../assets/svg/footerLogo.svg" alt="logo" />
      </div>
      <ul>
        <li>О сервисе</li>
        <li>О нас</li>
        <li>Контакты</li>
        <li>Гарантия качества</li>
        <li>Категории</li>
        <li>Розы</li>
      </ul>
      <ul>
        <li>Вопросы</li>
        <li>Вопросы и ответы</li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>Скидки</li>
      </ul>
      <ul>
        <li>Сотрудничество</li>
        <li>Партнёрство</li>
        <li>Корпоративным клиентам</li>
      </ul>
      <div class="lg:block hidden"></div>
      <ul class="text-end contact">
        <li>Свяжитесь с нами</li>
        <li>+998 (88) 111 02 11</li>
        <li>+998 (95) 888 58 58</li>
        <li>customercare@florify.com</li>
      </ul>
    </div>
    <div class="container mx-auto overflow-hidden xl:px-28 md:px-10 px-5">
      <p class="flex justify-between items-center">
        <span></span>
        <span class="font-bold pt-10 text-end">
          Узбекистан, город Ташкент, Мирабадский район, пр. Н. Назарбаева, 193,
          LES OFFICE, почтовый индекс 050013 <br />
          ТОО "Florify.uz (Флорифай.уз)"</span
        >
      </p>
      <div class="flex items-center gap-5 float-right py-10">
        <div
          class="flex items-center justify-center rounded-full h-14 w-14 bg-[#FFA500] p-3"
        >
          <img src="../assets/networks/facebook.svg" alt="" />
        </div>
        <div
          class="flex items-center justify-center rounded-full h-14 w-14 bg-[#FFA500] p-3"
        >
          <img src="../assets/networks/instagram.svg" alt="" />
        </div>
        <div
          class="flex items-center justify-center rounded-full h-14 w-14 bg-[#FFA500] p-3"
        >
          <img src="../assets/networks/telegram.svg" alt="" />
        </div>
      </div>
      <hr class="w-full" />
      <p class="text-end py-5 font-bold">Заказывайте через приложение</p>
      <div class="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-center pb-10">
        <ul class="flex gap-10">
          <li class="underline whitespace-nowrap">Персональные данные</li>
          <li class="underline whitespace-nowrap">Политика конфиденциальности</li>
          <li class="underline whitespace-nowrap">Публичная оферта</li>
          <li class="underline whitespace-nowrap">Согласие пользователя</li>
        </ul>
        <div class="flex items-center gap-5">
          <img src="../assets/svg/appstore.svg" alt="app store" />
          <img src="../assets/svg/googleplay.svg" alt="google play" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  li:nth-child(1){
    font-weight: 700;
    text-decoration: none;
  }

  li{
    text-decoration: underline;
    line-height: 19.2px;
  }
}

.contact li{
    text-decoration: none !important;
}
</style>