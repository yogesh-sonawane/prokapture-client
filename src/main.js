import Vue from 'vue';
import VueRouter from 'vue-router';
import Moment from 'moment';
import VeeValidate from "vee-validate";
import VueResource from 'vue-resource';
import app from './app.vue';
import appRouters from './app-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(VueResource);

Vue.filter('formatDate', function (value) {
    return Moment(String(value)).format('MM/DD/YYYY');
});

Vue.filter('formatTime', function (value) {
    return Moment(String(value)).format('hh:mm:ss');
});

new Vue({
  el: "#app",
  router: appRouters,
  render: h => h(app)
});
