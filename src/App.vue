<template>
<div>
  <NavbarComp />
  <HeaderComp />
</div>
  <router-view/>
</template>

<script>
import HeaderComp from './components/Header/HeaderComp.vue'
import NavbarComp from './components/Navbar/NavbarComp.vue'
export default {
  components: {
    HeaderComp,
    NavbarComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
