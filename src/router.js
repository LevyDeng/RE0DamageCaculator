import Vue from 'vue'
import VueRouter from "vue-router";

import character from "./components/character.vue"
import xinzhiqis from "./components/xinzhiqis.vue"
import mofaqi from "./components/mofaqi.vue"

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