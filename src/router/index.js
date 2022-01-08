import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import RecommendationREST from '../views/Recommendation-REST.vue'
import SearchREST from '../views/Search-REST.vue'
import TrackingUserId from '../views/Tracking-user-id.vue'


const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/recommendation-rest',
    name: 'Recommendation-REST',
    component: RecommendationREST
  },
  {
    path: '/search-rest',
    name: 'Search-REST',
    component: SearchREST
  },
  {
    path: '/tracking-user-id',
    name: 'Tracking-user-id',
    component: TrackingUserId
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
