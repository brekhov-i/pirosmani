<template>
  <div class="menuPage">
    <div class="container">
      <div class="manuPage__wrapper">
        <MenuNavbar @filter="filterTitle = $event"/>
        <Menu :filterTitle="filterTitle"/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/MenuCarts'
import MenuNavbar from '@/components/MenuNavbar';
export default {
  name: 'menu',
  data: () => ({
    filterTitle: 'all',
  }),
  components: {
    Menu, MenuNavbar
  },
  mounted() {
  }
}
</script>
