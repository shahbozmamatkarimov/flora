<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5">
    <!----------------------- Breadcrumb ---------------------------->
    <section>
      <nav class="flex py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
          >
            Главная
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Гарантия качества
          </li>
        </ol>
      </nav>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <!----------------------- section 1 ----------------------------->
    <section class="main md:w-[700px]">
      <h1 class="header">Гарантия качества</h1>
      <p>
        Наши дорогие клиенты — залог успеха компании. И мы делаем все, чтобы
        заказывать цветы у нас было для вас удобно и выгодно. Мы знаем, что
        вместе с букетами вы передаете свои светлые чувства и добрые эмоции,
        поэтому гарантируем, что сделаем все возможное, чтобы получатель цветов
        долго и с теплотой вспоминал об этом подарке.
      </p>
      <h1>Вы можете быть уверены в безупречном качестве</h1>
      <p>
        Мы постоянно контролируем качество всей продукции и работу курьеров,
        непосредственно доставляющих цветы получателям. Одной из форм такого
        контроля является постоянное проведение тестовых заказов. Главное для
        нас — безупречное качество всех предоставляемых товаров и услуг.
      </p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image1.png"
        alt="img"
      />
      <h1>Мы доставляем именно то, что вы заказали</h1>
      <p>
        Участники нашей сети, получают от нас печатные каталоги букетов и
        композиций. Каждый ваш заказ уходит флористу вместе с изображением
        заказанного, номером букета из каталога и подробным, до травинки,
        описанием выбранного вами букета, таким же, какое вы найдете на нашем
        сайте, кликнув на "узнать подробнее о составе" под изображением букета.
      </p>
      <br />
      <p>
        Для нас принципиально важно, чтобы получателю доставили букет или
        цветочную композицию, полностью соответствующую заказу.
      </p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image2.png"
        alt="img"
      />
      <h1>У нас адекватные цены</h1>
      <p>
        Нам важно, чтобы наши цветы были доступны всем. Мы представляем букеты и
        цветочные композиции в разных ценовых категориях, чтобы вы всегда могли
        выбрать именно то, что нужно.
      </p>
      <br />
      <p>
        Вне зависимости от цены, все букеты и цветочные композиции объединяют
        высокий уровень исполнения, элегантность и стиль. Разумная ценовая
        политика при неизменно высоком качестве — главный принцип нашей работы.
      </p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image3.png"
        alt="img"
      />

      <h1>Мы доставляем цветы в предельно короткие сроки</h1>
      <p>
        Мы предлагаем минимальные сроки доставки цветов. Мы гарантируем, что ваш
        заказ будет доставлен точно в срок.
      </p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image4.png"
        alt="img"
      />

      <h1>Мы гарантируем, что вы будете довольны</h1>
      <p>
        Главное для нас, чтобы люди, пользующиеся нашими услугами, остались
        довольны. А если вас почему-либо не устроит доставленный букет, вы
        вправе обратиться к нам в течение 24 часов с момента доставки, и мы
        заменим букет на новый, без выяснения причин вашего недовольства и даже
        в случае отсутствия таких причин.
      </p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image5.png"
        alt="img"
      />
    </section>

    <section>
      <div class="pb-20 lg:w-[848px] w-full">
        <h1>Мaгaзинaм</h1>
        <div
          class="shop grid grid-cols-3 md:px-10 px-5 border border-[#D9D9D9] rounded-xl lg:h-[130px] h-[100px] items-center"
        >
          <ul class="leading-10 col-span-2">
            <li class="text-[#242424] font-semibold lg:text-xl">
              Пoлучaйтe нoвых клиeнтoв бeз влoжeний!
            </li>
            <li class="text-[#242424] lg:text-md text-sm">
              Бecплaтнaя рeгиcтрaция и рaзмeщeниe тoвaрoв
            </li>
          </ul>
          <button
            class="lg:h-16 sm:h-12 h-10 lg:text-md text-sm lg:w-[244px] w-[190px] border border-[#242424] rounded-xl text-[#242424]"
          >
            Пoпрoбoвaть бecплaтнo
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 24px;
  margin: 20px 0;
}

.main p,
.main h1 {
  color: #242424;
}

.header {
  font-size: 32px;
  margin-top: -10px;
}

img {
  width: 416px;
  height: 300px;
  border-radius: 12px;
}

@media (max-width: 650px) {
  .shop ul {
    grid-column: span 3 / span 3;
  }

  .shop {
    height: 180px;
    width: 416px;
  }
}

@media (max-width: 768px) {
  .header {
    font-size: 25px;
  }

  h1 {
    font-size: 16px;
    margin: 15px 0;
  }

  p {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .shop {
    height: 180px;
    width: 100%;
    padding: 0 10px;
  }

  .shop li,
  .shop button {
    font-size: 13px;
  }

  img {
    width: 250px;
    height: 200px;
    border-radius: 12px;
  }
}

@media (max-width: 320px) {
  .shop ul {
    line-height: normal;
  }

  .shop li:nth-child(1) {
    margin-bottom: 10px;
  }
}
</style>
