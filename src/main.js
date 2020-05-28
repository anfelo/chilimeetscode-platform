import Vue from 'vue';
import App from './app/App.vue';
import { firestorePlugin } from 'vuefire';
import VueRouter from 'vue-router';
import VueCompositionApi from '@vue/composition-api';
import router from './router';

import './assets/style/global.scss';

Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
