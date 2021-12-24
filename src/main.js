import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import axios from 'axios'
import './css/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$http = axios

Vue.prototype.$library = library


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "./components/Home.vue",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Home.vue"),
    // component: Home,
  },
  {
    path: "/Berths",
    name: "Berths",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Berths.vue"),
  },
  {
    path: "/Tides",
    name: "Tides",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Tides.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // component: Login,
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
