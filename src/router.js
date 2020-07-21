import Vue from 'vue'
import VueRouter from "vue-router";

import character from "./components/Character.vue"
import xinzhiqis from "./components/Xinzhiqis.vue"
import mofaqi from "./components/Mofaqi.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/character",
    component: character
  },
  {
    path: "/xinzhiqis",
    component: xinzhiqis
  },
  {
    path: "/mofaqi",
    component: mofaqi
  },
  {
    path: "/",
    redirect: "/character"
  }
]

var router =  new VueRouter({
  routes
})

export default router;