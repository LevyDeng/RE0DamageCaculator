import Vue from 'vue'
import VueRouter from "vue-router";

import character from "./components/character.vue"
import hearchines from "./components/hearchines.vue"
import magichines from "./components/magichines.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/character",
    component: character
  },
  {
    path: "/hearchines",
    component: hearchines
  },
  {
    path: "/magichines",
    component: magichines
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