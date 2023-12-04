import customAxios from '@/api/index';

export const fetchUserProfile = async (context, username) => {
	try {
		context.commit('SET_LOADING_USER_PROFILE');
		const { data } = await customAxios.get(`/users/${username}`);
		context.commit('SET_LOADED_USER_PROFILE');
		context.commit('SET_USER_PROFILE', {
			...data.user,
			photo: 'https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg',
		});
		context.commit('SET_POSTS', data.posts);
	} catch (error) {
		context.commit('SET_ERROR_USER_PROFILE');
		context.commit('SET_USER_PROFILE', null);
		context.commit('SET_POSTS', []);
		console.log(error);
	}
};

export const createPost = async (context, post) => {
	try {
		context.commit('SET_LOADING_CREATE_POST');
		const { data } = await customAxios.post('/post', post);
		context.commit('SET_LOADED_CREATE_POST');
		// data.user.photo = 'https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg';
		// context.commit('SET_USER', data.user);
		// localStorage.setItem('token', data.token)
		context.commit('ADD_POST', data);
	} catch (error) {
		context.commit('SET_ERROR_CREATE_POST', 'TODO: SET_ERROR_CREATE_POST');
		console.log(error);
	}
};

// export const getPosts = async context => {
// 	try {
// 		const { data } = await customAxios.get('/post');
// 		context.commit('SET_POSTS', data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const getFriendsPosts = async context => {
	try {
		context.commit('SET_LOADING_FRIENDS_POSTS');
		const { data } = await customAxios.get('/post/friends');
		context.commit('SET_LOADED_FRIENDS_POSTS');
		context.commit('SET_FRIENDS_POSTS', data);
		console.log(data);
	} catch (error) {
		context.commit(
			'SET_ERROR_FRIENDS_POSTS',
			'TODO:SET_ERROR_FRIENDS_POSTS'
		);
		console.log(error);
	}
};
