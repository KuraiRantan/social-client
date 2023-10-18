import { createStore } from 'vuex';
import socket from '@/shared/store/socket/index';
import user from '@/modules/auth/store/user/index';
import profile from '@/modules/profile/store/profile/index';
import chat from '@/modules/chat/store/chat/index';
import post from '@/modules/post/store/post/index';

const store = createStore({
	modules: {
		user,
		profile,
		socket,
		chat,
		post,
	},
});

export default store;
