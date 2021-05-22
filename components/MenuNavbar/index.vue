<template>
  <div class="menuNavbar swiper-container">
    <div class="swiper-wrapper">
      <div @click="$emit('filter', category), enterCategory=category" class="menuNavbar__link swiper-slide" :class="{'menuNavbar-link--active': enterCategory === category}" v-for="(category, index) in categories" :key="index">
        <span>{{category}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper/core';

export default {
  data: () => ({
    categories: [
      'Супы',
      'Хачапури',
      'Мясное',
      'Мясное',
      'Мясное',
      'Мясное',
    ],
    enterCategory: 'all',
  }),
  methods: {
    filter(title) {

    }
  },
  mounted() {
    SwiperCore.use([Navigation]);
    const menuNavbar = new Swiper('.menuNavbar', {
      slidesPerView: 3,
      breakpoints: {
        1024: {
          slidesPerView: 5
        }
      }
    })
  }
}
</script>
