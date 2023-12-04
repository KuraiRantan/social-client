import ChatLayout from '@/modules/chat/layouts/ChatLayout.vue';
import Chat from '@/modules/chat/components/Chat.vue';

export default {
	name: 'chat',
	component: ChatLayout,
	children: [
		{
			path: ':username',
			name: 'chat-user',
			component: Chat,
		},
	],
};
