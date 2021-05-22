<template>
  <div class="productPage">
    <div class="container">
      <div class="productPage__wrapper">
        <div class="productPage__mainContent">
          <div class="productPage__image"></div>
          <div class="tabs productPage__tabs">
            <div class="tabs__head">
              <div class="tabs__btn active" id="about" @click="tabClick">О товаре</div>
              <div class="tabs__btn" id="parameters" @click="tabClick">Параметры</div>
              <div class="tabs__btn" id="reviews" @click="tabClick">Отзывы</div>
            </div>
            <div class="tabs__wrapper">
              <div class="content tabs__content open" data-target="about">
                <div class="content__title">
                  Описание
                </div>
                <div class="content__text">
                  Полутвердый пластичный однородный сыр, слегка ломкий на изгибе. Пажитник придает легкое ореховое послевкусие. В Италии считается столовым сыром, который подходит к любому времени суток и к любому блюду и к вину
                  <br><br>
                  Вес головки 500 г. +/-10%. Цена за 1 кг.
                  <br><br>
                  Продукция компании Alpenville изготовлена преимущественно из Шарангского молока
                </div>
              </div>
              <div class="tabs__content" data-target="parameters">
                <div class="content__text">
                  <strong>Калории:</strong> 420
                  <br><br>
                  <strong>Жиры:</strong> 54
                  <br><br>
                  <strong>Белки:</strong> 27
                  <br><br>
                  <strong>Углеводы:</strong> 18
                  <br><br>
                  <strong>Масса:</strong> 500 грамм
                </div>
              </div>
              <div class="tabs__content" data-target="reviews">
                <div class="content__title">
                  Описание
                </div>
                <div class="reviews">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="productPage__saidbar">
          <div class="productPage__infoBasket"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';
export default {
  layout: 'layoutWithOffer',
  data: () => ({
    tab: 'about'
  }),
  methods: {
    tabClick(e) {
      this.tab = e.target.getAttribute('id');
      document.querySelectorAll('.tabs__content').forEach(body => {
        if(body.classList.contains('open')) {
          body.classList.remove('open')
        }
        if(body.getAttribute('data-target') === this.tab) {
          body.classList.add('open')
        }
      })
    }
  },
  watch: {
    tab: function (newVal, oldVal) {
      document.querySelector(`#${oldVal}`).classList.remove('active');
      document.querySelector(`#${newVal}`).classList.add('active');
    }
  }
}
</script>
