import firebase from 'firebase/app';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

const firebaseConfig = {
  apiKey: 'AIzaSyDLpK07KSq38MAlSAXNbR-UP4V96DFg9CI',
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
