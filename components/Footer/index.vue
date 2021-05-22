<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__col">
          <div class="footer__phones">
            <div class="footer__phone">
              Бесплатный звонок по РФ
              <strong>+7 (831) 282-60-00</strong>
            </div>
            <div class="footer__phone">
              Для приема заказов
              <strong>+7 (904) 066-46-85</strong>
            </div>
          </div>
          <div class="footer__times">График работы по будням с 9:00 до 18:00</div>
          <div class="footer__email">Email: <a href="mailto: info@.ru">info@.ru</a></div>
          <a href="#" class="footer__support">Поддержка</a>
          <div class="footer__row">
            <div class="footer__copy">©2020. Пиросмани</div>
            <div class="footer__soglacy">Условия и соглашения</div>
            <div class="footer__policy">Политика конфиденциальности</div>
          </div>
        </div>
        <div class="footer__col">
          <a href="#" class="footer__vk">Мы в вконтакте ></a>
          <a href="#" class="footer__inst">Мы в instagram ></a>
        </div>
        <div class="footer__col">
          <div class="footer__login">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.39762 4.82654C9.39762 3.69222 8.47515 2.76976 7.34084 2.76976C6.20652 2.76976 5.28405 3.69222 5.28405 4.82654C5.28405 5.96085 6.20652 6.88332 7.34084 6.88332C8.47515 6.88332 9.39762 5.96085 9.39762 4.82654ZM11.4543 4.82652C11.4543 7.09515 9.60937 8.94008 7.34074 8.94008C5.07211 8.94008 3.22718 7.09515 3.22718 4.82652C3.22718 2.55789 5.07211 0.712952 7.34074 0.712952C9.60937 0.712952 11.4543 2.55789 11.4543 4.82652ZM0.142029 18.1956C0.142029 14.226 3.37221 10.9969 7.34077 10.9969C11.3093 10.9969 14.5395 14.226 14.5395 18.1956C14.5395 18.7633 14.0798 19.224 13.5111 19.224C12.9424 19.224 12.4827 18.7633 12.4827 18.1956C12.4827 15.3604 10.176 13.0537 7.34077 13.0537C4.50549 13.0537 2.19881 15.3604 2.19881 18.1956C2.19881 18.7633 1.73912 19.224 1.17042 19.224C0.60172 19.224 0.142029 18.7633 0.142029 18.1956Z"
              />
            </svg>
            <button @click="this.$emit('login')">Войти</button>
            <span>/</span>
            <button @click="this.$emit('register')">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import "./style.scss";
export default {
  name: "Footer",
  data: () => ({}),
};
</script>
