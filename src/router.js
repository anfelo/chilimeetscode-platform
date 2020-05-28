import VueRouter from 'vue-router';

import Home from './app/modules/home/pages/Home.vue';
import Login from './app/core/auth/pages/Login.vue';

export const router = new VueRouter({
	routes: [
		{ path: '/home', component: Home },
		{ path: '/login', component: Login }
	]
});
