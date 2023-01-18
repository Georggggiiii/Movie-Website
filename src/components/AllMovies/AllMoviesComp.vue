<template>
    <div class="product">
        <img @click="openMovie" :src="data.Poster" alt="">
        <div class="product-desc">
            <h1 class="title">{{ data.Title }}</h1>
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
    width: 200px;
    border-radius: 10px;
}
.product {
    margin-top: 100px;
    cursor: pointer;
    margin-left: 50px;
    position: relative;
    left: 130px;
    border-radius: 10px;
}
.product .product-desc {
    background-color: #01cc8f;
    border-radius: 0 0 10px 10px;
    height: 150px;
    width: 200px;
}
.product-desc .title {
    font-size: 20px;
}
@media only screen and (max-width:1500px) {
    .product {
        transform: translateX(-70px);
    }
}
@media only screen and (max-width:1000px) {
    .product {
        transform: translateX(-100px);
    }
}
@media only screen and (max-width:750px) {
    .product {
        transform: translateX(-130px);
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