<template>
  <div class="home">
    <MovieComp v-for="(item, index) in productsData" :key="index" :data="item" />
  </div>
</template>

<script>
import MovieComp from '../components/movies/MovieComp.vue'
import prData from '../Movies.json'

export default {
  name: 'HomeView',
  data() {
    return {
      productsData: prData
    }
  },
  components: {
    MovieComp
  },
  }
</script>

<style scoped>
.home {
  background-color: #282b38;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
}
@media only screen and (max-width:1250px) {
   .home {
    grid-template-columns: auto;
   } 
   
  }
</style>
