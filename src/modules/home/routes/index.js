export default {
	name: 'home',
	component: () =>
		import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue'),
	children: [],
};
