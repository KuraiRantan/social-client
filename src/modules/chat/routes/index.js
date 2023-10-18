export default {
	name: 'chat',
	component: () =>
		import(
			/* webpackChunkName: "ChatLayout" */ '../layouts/ChatLayout.vue'
		),
	children: [
		{
			path: ':username',
			name: 'chat-user',
			component: () =>
				import(/* webpackChunkName: "Chat" */ '../components/Chat.vue'),
		},
	],
};
