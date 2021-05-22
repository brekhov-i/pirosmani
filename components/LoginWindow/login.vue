<template>
  <div class="modalWindow" :class="{'open': open}">
    <div class="modalWindow__wrapper">
      <button class="modalWindow__close" @click="$emit('close')">
        <span></span>
        <span></span>
      </button>
      <svg class="modalWindow__icon" width="21" height="26" viewBox="0 0 21 26"xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2763 5.74711C13.2763 4.18206 12.0036 2.90931 10.4385 2.90931C8.87349 2.90931 7.60073 4.18206 7.60073 5.74711C7.60073 7.31216 8.87349 8.58492 10.4385 8.58492C12.0036 8.58492 13.2763 7.31216 13.2763 5.74711ZM16.1141 5.74714C16.1141 8.87724 13.5686 11.4228 10.4385 11.4228C7.30844 11.4228 4.76293 8.87724 4.76293 5.74714C4.76293 2.61704 7.30844 0.0715332 10.4385 0.0715332C13.5686 0.0715332 16.1141 2.61704 16.1141 5.74714ZM0.506104 24.1927C0.506104 18.7157 4.96288 14.2604 10.4384 14.2604C15.914 14.2604 20.3707 18.7157 20.3707 24.1927C20.3707 24.9759 19.7365 25.6116 18.9518 25.6116C18.1672 25.6116 17.5329 24.9759 17.5329 24.1927C17.5329 20.2808 14.3503 17.0982 10.4384 17.0982C6.52651 17.0982 3.34391 20.2808 3.34391 24.1927C3.34391 24.9759 2.70966 25.6116 1.92501 25.6116C1.14035 25.6116 0.506104 24.9759 0.506104 24.1927Z"/>
      </svg>
      <h3 class="modalWindow__title">Войти в личный кабинет</h3>
      <form action="#" class="form modalWindow__form" @submit.prevent="login">
        <div class="form__group">
          <input type="tel" required class="form__input" :class="{'form__input--error': ($v.phone.$dirty && $v.phone.$error)}" v-model="$v.phone.$model" placeholder="Телефон">
          <small class="form__error" v-show="$v.phone.$error">Телефон должен быть заполнен</small>
        </div>
        <div class="form__group">
          <input type="password" required class="form__input" :class="{'form__input--error': ($v.password.$dirty && $v.password.$error)}" v-model="$v.password.$model" placeholder="Пароль">
          <small class="form__error" v-show="$v.password.$error">Пароль должен быть не менее {{ $v.password.$params.minLength ? $v.password.$params.minLength.min : '' }} символов</small>
        </div>
        <button class="form__forgotPass">Забыли пароль?</button>
        <button class="form__submit login-submit" @click="login">Войти</button>
        <p class="form__text">Впервые у нас? <button @click="$emit('register')">Зарегистрироваться</button></p>
      </form>
    </div>
  </div>
</template>

<script>
import './style.scss'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  props: ['open'],
  data: () => ({
    phone: '',
    password: ''
  }),
  methods: {
    login() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return;
      }
    }
  },
  validations: {
    phone: {
      required,
    },
    password: {
      required,
      minLength: minLength(6)
    },
  }
}
</script>
