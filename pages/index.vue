<template>
  <div class="mainPage">
    <div class="container">
      <div class="mainPage__wrapper">
        <!--
        //*Слайдер с предложениями
        //*Блок меню
          //*Название категории (Все товары)
          //*Блок с карточками блюд
            //*Карточка блюда
          //*Пагинация
        -->
        <Menu />
      </div>
    </div>
    <div class="video"></div>
  </div>
</template>

<script>
import Menu from "@/components/MenuCarts";

export default {
  layout: "layoutWithOffer",
  data: () => ({}),
  components: {
    Menu,
  },
};
</script>
