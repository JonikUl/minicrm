import firebase from 'firebase/app';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import localizeFilter from '@/filters/localize.filter';
import tooltipDirective from '@/directives/tooltip.directive';
import tooltipClearDirective from '@/directives/tooltip-clear.directive';
import messagePlugin from '@/utils/message.plugin';
import titlePlugin from '@/utils/title.plugin';
import Loader from '@/components/app/Loader.vue';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.use(titlePlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.directive('tooltip-clear', tooltipClearDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

const firebaseApiKey = process.env.VUE_APP_FIREBASE;
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: 'vue-crm-money.firebaseapp.com',
  databaseURL: 'https://vue-crm-money.firebaseio.com',
  projectId: 'vue-crm-money',
  storageBucket: 'vue-crm-money.appspot.com',
  messagingSenderId: '442527604134',
  appId: '1:442527604134:web:ffb004960b232203cd8367',
  measurementId: 'G-BJCJCDSLWN',
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
