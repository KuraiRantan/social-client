import customAxios from '@/api/index';

export const login = async (context, credentials) => {
	try {
		const { data } = await customAxios.post('/auth/login', credentials);
		data.user.imgProfile =
			'https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg';
		context.commit('LOGIN', { user: data.user, token: data.token });
		context.commit('SET_NOTIFICATIONS', data.notifications);
		context.commit('SET_FRIENDS', data.friends);
		return true;
	} catch (error) {
		console.log(error);
	}
	return false;
};

export const register = async (context, user) => {
	try {
		const { data } = await customAxios.post('/users', user);
	} catch (error) {
		console.log(error);
	}
};

export const fetchVerifyAuthentication = async context => {
	try {
		const { data } = await customAxios.post('/auth/authenticated');
		data.user.imgProfile =
			'https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg';

		if (data) {
			context.commit('LOGIN', { user: data.user, token: data.token });
			context.commit('SET_NOTIFICATIONS', data.notifications);
			context.commit('SET_FRIENDS', data.friends);
			return true;
		}
		return false;
	} catch (error) {
		console.log(error);
	}
};

export const fetchFriendRequest = async (context, invite) => {
	try {
		const { data } = await customAxios.post('/friends/request', invite);
		context.commit('SET_FRIEND', data);
	} catch (error) {
		console.log(error);
	}
};

export const fetchReadNotifications = async (context, notifications) => {
	try {
		const { data } = await customAxios.post('/notification/read', {
			notifications,
		});
		context.commit('SET_NOTIFICATIONS', data);
	} catch (error) {
		console.log(error);
	}
};
