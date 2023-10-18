import authRoutes from '@/modules/auth/routes';
import chatRoutes from '@/modules/chat/routes';
import homeRoutes from '@/modules/home/routes';
import profileRoutes from '@/modules/profile/routes';
import postRoutes from '@/modules/post/routes';
import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store';

const routes = [
	{
		path: '',
		...homeRoutes,
	},
	{
		path: '/auth',
		...authRoutes,
	},
	{
		path: '/profile/:username',
		...profileRoutes,
	},
	{
		path: '/chat',
		...chatRoutes,
	},
	{
		path: '/post/:postId',
		...postRoutes,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	const isAuthenticated = await store.dispatch(
		'user/fetchVerifyAuthentication'
	);
	if (isAuthenticated && !to.path.startsWith('/auth')) {
		store.dispatch('socket/connectSocket');
		return next();
	}
	if (isAuthenticated && to.path.startsWith('/auth')) {
		next({ name: 'home' });
	}
	if (!isAuthenticated && !to.path.startsWith('/auth')) {
		next({ name: 'auth-login' });
	}
	next();
});

export default router;
