export default {
	name: 'auth',
	component: () =>
		import(
			/* webpackChunkName: "AuthLayout" */ '../layouts/AuthLayout.vue'
		),
	children: [
		{
			path: 'login',
			name: 'auth-login',
			component: () =>
				import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
		},
		{
			path: 'register',
			name: 'auth-register',
			component: () =>
				import(
					/* webpackChunkName: "Register" */ '../views/Register.vue'
				),
		},
	],
};
