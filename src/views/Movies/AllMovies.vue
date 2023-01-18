<template>
    <div id="body">
        <input v-model="searchWord" type="search" placeholder="Search..." class="top-right">
    </div>
    <div class="body">
        <AllMoviesComp v-for="(item, index) in getData" :key="index" :data="item"/>
    </div>
</template>

<script>
import AllMoviesComp from '../../components/AllMovies/AllMoviesComp.vue'
import prData from '../../Movies.json'
    export default {
     components: {
        AllMoviesComp
     },
     computed: {
            getData() {
                return this.productsData.filter(el => el.Title.toLowerCase().includes(this.searchWord.toLowerCase()))
            },
        },
     data() {
        return {
            productsData: prData,
            searchWord: "",

        }
     }
    }
</script>

<style scoped>
#body {
    background-color: #282b38;

}
.body {
    background-color: #282b38;
    display: grid;
    grid-template-columns: 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr;
    justify-content: center;
}
input {
    color: #01cc8f;
    border: 1px solid grey;
    outline: none;
    padding: 10px 15px;
    width: 50%;
    position: relative;
    left: 30%;
    margin-top: 150px;
    background-color: #282b38;
   border-radius: 5px;
   justify-content: center;
}
input:focus {
    border: 3px solid #fff;
    outline: none;
}

@media only screen and (max-width:1500px) {
    .body {
        grid-template-columns: 0.1fr 0.1fr 0.1fr;
    }
}
@media only screen and (max-width:1000px) {
    .body {
        grid-template-columns: 0.1fr 0.1fr;
    }
}
@media only screen and (max-width:750px) {
    .body {
        grid-template-columns: 0.1fr;
    }
}
@media only screen and (min-width:200px) {
    .body {
        min-height:100rem;
    }
}
</style>