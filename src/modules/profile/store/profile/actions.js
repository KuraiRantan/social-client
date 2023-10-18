import customAxios from '@/api/index';
import axios from '@/api/index';

export const fetchUserProfile = async (context, username) => {
	try {
		const { data } = await customAxios.get(`/users/${username}`);
		context.commit('SET_USER_PROFILE', {
			...data.user,
			photo: 'https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg',
		});
		context.commit('SET_POSTS', data.posts);
	} catch (error) {
		context.commit('SET_USER_PROFILE', null);
		context.commit('SET_POSTS', []);
		console.log(error);
	}
};

export const createPost = async (context, post) => {
	const { data } = await axios.post('/post', post);
	// data.user.photo = 'https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg';
	// context.commit('SET_USER', data.user);
	// localStorage.setItem('token', data.token)
	context.commit('ADD_POST', data);
};

export const getPosts = async context => {
	try {
		const { data } = await customAxios.get('/post');
		context.commit('SET_POSTS', data);
	} catch (error) {
		console.log(error);
	}
};

export const getFriendsPosts = async context => {
	try {
		const { data } = await customAxios.get('/post/friends');
		context.commit('SET_FRIENDS_POSTS', data);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
