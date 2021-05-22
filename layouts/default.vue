<style lang="scss">
@import "../assets/scss/_functions.scss";
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.main {
  width: 100%;
  height: auto;
  flex-grow: 1;
  padding: vw(60) 0;
}
</style>

<template>
  <div id="app">
    <LoginWindow :open="openLogin" @register="openLogin = !openLogin, openRegister = !openRegister" @close="openLogin = !openLogin"/>
    <RegisterWindow :open="openRegister" @close="openRegister = !openRegister"/>
    <Header @openLogin="openLogin = !openLogin"/>
    <main class="main">
      <Nuxt />
    </main>
    <Footer @openRegister="openRegister = !openRegister" @openLogin="openLogin = !openLogin"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginWindow from '~/components/LoginWindow/login';
import RegisterWindow from '~/components/LoginWindow/register';

export default {
  data: () => ({
    openLogin: false,
    openRegister: false,
  }),
  components: {
    Header,
    Footer,
    LoginWindow,
    RegisterWindow
  },
};
</script>
