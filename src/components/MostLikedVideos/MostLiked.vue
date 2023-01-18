<template>
  <div class="body">
      <div class="most-liked">
<h1 class="title">Most Liked</h1>
<br><br>
<div v-for="movie in movies" :key="movie.id" class="grid">
<div class="description">
   <h1>{{ movie.Title }}</h1>
    <p class="rating-date">IMDDB rating:{{ movie.rating }}</p>
    <p class="rating-date">Release date: {{ movie.Year }}</p>
    <h2> Time:{{ movie.Runtime }}</h2>
    <p>{{ movie.desc }}</p>
</div>
<div class="image">
    <img :src="movie.Poster" alt="">
</div>
</div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: [
                    {
 "id":1,
  "Title": "Avatar: The Way of Water",
  "Year": "2022",
  "rating": 7.7,
  "Runtime": "101 min",
  "desc":"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
  "Poster": "https://image.tmdb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"   ,
                    },
                    {
  "id":2,
   "Title": "Strange World",
   "Year": "2022",
   "rating": 6.5,
   "Runtime": "101 min",
   "desc":"A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
   "Poster":"https://image.tmdb.org/t/p/w1280/jXGMJUq9zcrScs02qkQuCtmWwaI.jpg"
},
{
  "id":3,
"Title": "Troll",
"Year": "2022",
"rating": 5.5,
"Runtime": "101 min",
"desc":"Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
"Poster": "https://image.tmdb.org/t/p/w1280/9z4jRr43JdtU66P0iy8h18OyLql.jpg"
},
{
  "id":4,
"Title": "Il mio nome è vendetta",
"Year": "2022",
"rating": 6.7,
"Runtime": "101 min",
"desc":"After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.",
"Poster": "https://image.tmdb.org/t/p/w1280/7l3war94J4tRyWUiLAGokr3ViF2.jpg"
},
{
  "id":5,
"Title": "The Big 4",
"Year": "2022",
"rating": 5.5,
"Runtime": "101 min",
"desc":"A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
"Poster": "https://image.tmdb.org/t/p/w1280/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg"
},
                ]
            }
        }
    }
</script>

<style scoped>
.body {
    background-color: #282b38;
}
.most-liked .title {
    color: #01cc8f;
   text-align: center;
   font-size: 45px;
}
.most-liked {
    width: 75%;
    position: relative;
    bottom:100px;
    left: 22%;
}

.description {
    width: 100%;
    margin-top: 100px;
}
.description h1 {
    color:#01cc8f;
}
.description .rating-date{
    color: white;
    font-size: 25px;
    line-height: 80px;
}
.description p {
    color: white;
    font-weight: 500;
    line-height: 30px;
}
.image {
    height:33rem;
}
.image img{
    width:350px;
    height: 400px;
    margin-top: 20px;
}
.grid {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 20px;
    border-top: 1px solid #01cc8f;
}
h2 {
    color: white;
}
@media only screen and (max-width:1110px) {
    .grid {
        grid-template-columns: auto;
        border-top:none;
    }
}
@media only screen and (max-width:450px) {
.image img {
    width: 280px;
}
}
@media only screen and (max-width:370px) {
.image img {
    width: 230px;
}
}
@media only screen and (max-width:300px) {
.image img {
    width: 150px;
}
}
</style>