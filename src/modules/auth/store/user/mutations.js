export const LOGIN = (state, { user, token }) => {
	state.user = user;
	localStorage.setItem('token', token);
	state.isLoggedIn = true;
};

export const LOGOUT = state => {
	state.user = {};
	localStorage.removeItem('token');
	state.isLoggedIn = false;
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

export const SET_LOADING_LOGIN = state => {
	state.isLoadingLogin = true;
	state.isErrorLogin = null;
};

export const SET_LOADED_LOGIN = state => {
	state.isLoadingLogin = false;
};

export const SET_ERROR_LOGIN = (state, message) => {
	state.isErrorLogin = message;
	state.isLoadingLogin = false;
};

export const SET_LOADING_FRIENDS = state => {
	state.isLoadingFriends = true;
	state.isErrorFriends = null;
};

export const SET_LOADED_FRIENDS = state => {
	state.isLoadingFriends = false;
};

export const SET_ERROR_FRIENDS = (state, message) => {
	state.isErrorFriends = message;
	state.isLoadingFriends = false;
};

export const SET_ERROR_NOTIFICATIONS = (state, message) => {
	state.isLoadingNotifications = false;
	state.iserrorNotifications = message;
};
