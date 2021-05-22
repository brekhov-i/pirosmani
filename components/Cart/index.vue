<template>
  <article class="cart">
    <div class="cart__image">
      <img :src="productProps.img" :alt="productProps.title" />
    </div>
    <div class="cart__title">{{ productProps.title }}</div>
    <div class="cart__description">
      {{ productProps.previewText }}
    </div>
    <div class="cart__rating"></div>
    <div class="cart__info">
      <div class="cart__price">{{ productProps.price }} ₽/кг</div>
      <div class="cart__weigth">За {{ productProps.weigth }}гр.</div>
    </div>
    <button class="cart__btn" @click="addBasket" v-if="count === 0">В корзину</button>
    <div class="cart__busketBtns" v-else>
      <div class="cart__counts">
        <button @click="count++">+</button>
        <span>{{ count }}</span>
        <button @click="deleteBasket">-</button>
      </div>
      <button class="cart__addBtn" @click="updateBasket">
        <svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.80159 5.1144H3.47241L2.75702 2.49231H8.11264L6.80159 5.1144ZM8.85549 2.03247C8.69511 1.77288 8.41717 1.61817 8.11213 1.61817H2.51833L2.2487 0.629209C2.19669 0.439108 2.02407 0.307129 1.82698 0.307129H0.952945C0.711276 0.307129 0.51593 0.502912 0.51593 0.744144C0.51593 0.985377 0.711276 1.18116 0.952945 1.18116H1.4931L2.7163 5.66625C2.76831 5.85635 2.94093 5.98833 3.13802 5.98833H7.07116C7.23679 5.98833 7.38799 5.89481 7.46229 5.74666L8.89395 2.8829C9.03074 2.60976 9.01588 2.29205 8.85549 2.03247ZM2.91959 6.86253C2.55774 6.86253 2.26406 7.15577 2.26406 7.51805C2.26406 7.88034 2.55774 8.17358 2.91959 8.17358C3.28143 8.17358 3.57511 7.88034 3.57511 7.51805C3.57511 7.15577 3.28143 6.86253 2.91959 6.86253ZM6.63423 7.51805C6.63423 7.15577 6.9279 6.86253 7.28975 6.86253C7.6516 6.86253 7.94527 7.15577 7.94527 7.51805C7.94527 7.88034 7.6516 8.17358 7.28975 8.17358C6.9279 8.17358 6.63423 7.88034 6.63423 7.51805Z"
          />
        </svg>
      </button>
    </div>
  </article>
</template>

<script>
import "./style.scss";
export default {
  props: ["productProps"],
  data: () => ({
    count: 0,
  }),
  methods: {
    addBasket() {
      this.count++;
      const product = {
        img: this.productProps.img,
        title: this.productProps.title,
        price: this.productProps.price,
        weigth: this.productProps.weigth,
        count: this.count,
      };
      this.$store.commit("basket/setBasket", product);
    },
    updateBasket() {
      const product = {
        title: this.productProps.title,
        count: this.count,
      };
      this.$store.commit("basket/updateBasket", product);
    },
    deleteBasket() {
      if (this.count === 1) {
        const product = {
          title: this.productProps.title,
        };
        this.count--;
        this.$store.commit("basket/deleteBasket", product);
      }
      if (this.count > 1) {
        this.count--;
        const product = {
          title: this.productProps.title,
          count: this.count,
        };
        this.$store.commit("basket/updateBasket", product);
      }
    },
  },
  mounted() {
    if (this.$store.state.basket.basket.length === 0) {
      this.$store.commit("basket/getBasket");
    }
    const basket = this.$store.state.basket.basket;
    if (basket) {
      const index = basket.findIndex((prod) => prod.title === this.productProps.title);
      if (index >= 0) {
        this.count = basket[index].count;
      }
    }
  },
};
</script>
