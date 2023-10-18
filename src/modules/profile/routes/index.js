export default {
	name: 'profile',
	component: () =>
		import(
			/* webpackChunkName: "ProfileView" */ '../views/ProfileView.vue'
		),
	children: [],
};
