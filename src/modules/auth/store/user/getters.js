export const getUserLoged = state => {
	return state.user;
};

export const getNotifications = state => {
	return state.notifications;
};

export const getFriendUsers = state => {
	const friendsAcepted = state.friends.filter(f => f.status === 'acepted');
	const users = friendsAcepted.map(f => f.user);
	return users;
};

export const getFriends = state => {
	return state.friends;
};
