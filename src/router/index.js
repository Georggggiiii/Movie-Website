import { createRouter, createWebHashHistory } from 'vue-router'
import AllMovies from '../views/Movies/AllMovies'

const routes = [
  {
    path: '/',
    name: 'all-movies',
    component:  AllMovies
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/MovieView.vue')
  },
    {
    path: '/most-liked',
    name: 'mostliked',
    component: () => import('../views/MostLiked/MostLiked.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
