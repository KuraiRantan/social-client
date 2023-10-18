export default {
	name: 'post-details',
	component: () =>
		import(
			/* webpackChunkName: "PostDetails" */ '@/modules/post/views/PostDetails.vue'
		),
	children: [],
};
