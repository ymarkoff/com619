import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import './css/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/About.vue"),
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
