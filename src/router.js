import VueRouter from 'vue-router';
import { auth } from './firebase';

import Home from './app/modules/home/pages/Home.vue';

import { authRoutes } from './app/core/auth/auth.routes';

let isAuthenticated;
auth.onAuthStateChanged((firebaseUser) => (isAuthenticated = !!firebaseUser));

const router = new VueRouter({
	routes: [
		{ path: '/', redirect: () => '/home' },
		{ path: '/home', component: Home },
		...authRoutes
	]
});

router.beforeEach((to, from, next) => {
	if (to.name !== 'login' && !isAuthenticated) {
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
