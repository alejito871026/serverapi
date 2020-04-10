import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios';


import App from './App.vue';
import home from './views/home';

Vue.use(VueAxios,axios);
Vue.use(VueRouter)

const routes =[
  {
    path: "/",
    name: "home",
    component: home
  }
];

const router = new VueRouter({mode: 'history',routes:routes});
new Vue(App)
new Vue (Vue.util.extend({router},App)).$mount('#app'); 

