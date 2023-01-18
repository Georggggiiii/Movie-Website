<template>
    <div class="header">
<ul>
                <li>All</li>
  <router-link to="/"><li>Movies</li></router-link>
    <router-link to="/"><li>TV Shows</li></router-link>
</ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header {
    position: fixed;
    background-color: #282b38;
    z-index: 1;
    width: 100%;
    height: 60px;
    transform: translateX(20%);
    text-decoration: none;
}
ul li {
    list-style: none;
    margin-left: 100px;
    text-align: center;
    color: white;
    cursor: pointer;
}
ul li:hover {
    color: aquamarine;
}
ul {
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 20px;
    position: relative;
   right: 14%;
}

</style>