import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from "vee-validate";
import app from './app.vue';
import userMaster from './user-master/user-master';
import helloWorld from './hello-world.vue';
import userLogin from './user-login/user-login.vue';
import landingPage from './landing/landing.vue';
import businessProcess from './business-process/business-process.vue';

Vue.config.productionTip = false;
const vueRouter = [{
    path: '/',
    component: helloWorld,
  },
  {
    path: '/user-master',
    component: userMaster,
    props: {
      msg: 'This is User Master',
      message: 'User Master',
      id: 20,
    },
  },
  {
    path: '/user-master/userId',
    component: userMaster,
  },
  {
    path: '/user-login',
    component: userLogin,
    props: {
      message: 'This is test message...',
    },
  },
  {
    path: '/landing',
    component: landingPage,
  },
  {
    path: '/business-process',
    component: businessProcess,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  fallback: false,
  routes: vueRouter, // short for `routes: routes`
});

Vue.use(VueRouter);
Vue.use(VeeValidate);

new Vue({
  router,
  el: "#app",
  render: h => h(app)
});