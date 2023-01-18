<template>
<div class="background">
  <div class="grid">
  <div class="product">
   <img :src="moviedata[0].Poster" alt="">
  </div>
  <div class="product-description">
    <h1 class="line-height">{{moviedata[0].Title}}</h1>
<div class="rating">
  <p class="line-height">IMDDB rating: {{ moviedata[0].rating }}</p>
    <p class="line-height">Release date: {{ moviedata[0].Year }} Year </p>
   <h4>{{ moviedata[0].desc }}</h4>
</div>
  </div>
 </div>
  <router-view/>
</div>
</template>

<script>
import prData from '../Movies.json'
export default {
  data() {
    return {
      moviedata:prData
    }
  },
  mounted() {
        this.moviedata = prData.filter(el => el.id === parseInt(this.$route.query.movies));
    },
}
</script>

<style>
.background {
  background-color: #282b38;
  height:57rem;
}
.grid {
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
  width: 75%;
  height: 45rem;
  left: 22%;
  top: 100px;
}
.product img {
    width: 400px;
}
 .product-description {
  color:#01cc8f;
  margin-left: 40px;
  width: 100%;
  height: 65%;
  background-color: #282b38
}
.product-description .line-height {
  line-height: 100px;
}
.rating {
  color: white;
  font-weight: 500;
}
.rating p {
  font-size: 20px;
}
@media only screen and (max-width:1350px) {
  .grid {
    grid-template-columns: 1fr;
    justify-content: center;
  }
  .background {
    background-color: #282b38;
            min-height: 70rem;
  }
  .product-description {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    width: 100%;
  }
  .product img {
    width: 200px;
  }
}
@media only screen and (max-width:300px) {
  .product-description .line-height {
    font-size: 20px;
  }
  .product img {
    width: 150px;
  }
}
</style>
