export const LOGIN = (state, { user, token }) => {
	state.user = user;
	localStorage.setItem('token', token);
};

export const LOGOUT = state => {
	state.user = {};
	localStorage.removeItem('token');
};

export const ADD_NOTIFICATION = (state, notification) => {
	state.notifications.unshift(notification);
};

export const SET_NOTIFICATIONS = (state, notifications) => {
	state.notifications = notifications;
};

export const SET_FRIEND_USER_PROFILE = (state, friend) => {
	const friends = state.user.friends.filter(f => f.id !== friend.id);
	state.user = {
		...state.user,
		friends: [...friends, friend],
	};
};

export const SET_FRIENDS = (state, friends) => {
	state.friends = friends;
};

export const SET_FRIEND = (state, friend) => {
	const newFriends = state.friends.filter(f => f.id !== friend.id);
	state.friends = [...newFriends, friend];
};
