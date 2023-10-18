export const SET_SOCKET = (state, socket) => {
	if (socket !== null) {
		if (state.socket === null) {
			state.socket = socket;
		} else {
			socket.disconnect();
		}
	}
	// const token = localStorage.getItem('token');
	// if(token && !state.socket){
	//     state.socket = io('ws://localhost:3000', {
	//         transports: ['websocket', 'polling'],
	//         auth: {
	//             token
	//         }
	//     });

	//     state.socket.on('notificationCreatePost',(notification) => {
	//         console.log(notification)
	//     })
	// }
};

export const disconnectSocket = state => {
	state.socket?.disconnect();
	state.socket = null;
};

// export const SET_POSTS = (state, posts) => {
//     state.posts = posts;
// }

// export const ADD_NOTIFICATION = (state, notification) => {
//     state.notifications.unshift(notification);
// }

// export const SET_FRIENDS_POSTS = (state, posts) => {
//     state.friendsPosts = posts;
// }
