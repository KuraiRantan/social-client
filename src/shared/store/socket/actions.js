import { io } from 'socket.io-client';

// export const getPosts = async (context) => {
//     try {
//         const { data } = await customAxios.get('/post');
//         context.commit('SET_POSTS', data);
//     } catch (error) {
//         console.log(error)
//         console.log('TODO:error en el login actions');
//     }
// }

export const connectSocket = context => {
	try {
		let socket = null;
		const token = localStorage.getItem('token');
		if (token) {
			socket = io('ws://localhost:3000', {
				transports: ['websocket', 'polling'],
				auth: {
					token,
				},
			});

			socket.on('notificationCreatePost', data => {
				context.commit('user/ADD_NOTIFICATION', data?.notification, {
					root: true,
				});
				context.commit('profile/ADD_FRIENDS_POST', data?.post, {
					root: true,
				});
				// context.commit('socket/user/ADD_NOTIFICATION', notification)
			});
			socket.on('notificationRequestFriend', data => {
				context.commit('user/ADD_NOTIFICATION', data?.notification, {
					root: true,
				});
				context.commit('user/SET_FRIEND', data?.friend, { root: true });
			});
			socket.on('createMessage', data => {
				context.commit('chat/ADD_MESSAGE', data, { root: true });
			});
			socket.on('statusUser', data => {
				context.commit('user/SET_FRIEND', data, { root: true });
			});
		}
		context.commit('SET_SOCKET', socket);
	} catch (error) {
		console.log(error);
	}
};

// export const getFriendsPosts = async (context) => {
//     try {
//         const { data } = await customAxios.get('/post/friends');
//         context.commit('SET_FRIENDS_POSTS', data);
//     } catch (error) {
//         console.log(error)
//         console.log('TODO:error en el login actions');
//     }
// }
