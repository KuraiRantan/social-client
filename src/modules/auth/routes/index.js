import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue';
import Login from '@/modules/auth/views/Login.vue';
import Register from '@/modules/auth/views/Register.vue';

export default {
	name: 'auth',
	component: AuthLayout,
	children: [
		{
			path: 'login',
			name: 'auth-login',
			component: Login,
		},
		{
			path: 'register',
			name: 'auth-register',
			component: Register,
		},
	],
};
