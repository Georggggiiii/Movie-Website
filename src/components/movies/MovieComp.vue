<template>
    <div class="product">
        <img @click="openMovie" :src="data.Poster" alt="">
        <div class="product-desc">
            <h1>{{ data.Title }}</h1>
        <p>IMDDB rating: {{ data.rating }}</p>
        <p>Release date: {{ data.Year }}</p>
        </div>
    </div>

</template>

<script>
import prData from '../../Movies.json'
    export default {
        data() {
            return {
                currentData: prData,
            }
        },
        props: {
            data: {
                required: true,
                type: Object
            }
        },
        methods: {
            openMovie() {
                this.$router.push({path: 'movie', query: { movies: this.data.id}})
            }
        }
    }
</script>

<style scoped>
.product img {
    width:350px;
}
.product {
    margin-top: 30%;
    cursor: pointer;
    justify-content: center;
    margin-left: 150px;
    margin-right: 100px;
    position: relative;
    left: 20%;
}
.product .product-desc {
    background-color: #01cc8f;
    border-radius: 0 0 10px 10px;
    height: 150px;
    width: 350px;
}
@media only screen and (max-width:1250px) {
   .product {
    left: 5%;
   }
  }
  @media only screen and (max-width:600px) {
    .product img{
        width: 250px;
    }
    .product .product-desc {
        width: 250px;
    }
  }
  @media only screen and (max-width:400px) {
    .product img {
        width:200px;
    }
    .product .product-desc {
        width: 200px;
    }
    .product {
        transform: translateX(-20px);
    }
  }
  @media only screen and (max-width:260px) {
    .product img {
        width:150px
    }
    .product .product-desc {
        width:150px
    }
}
</style>