import customAxios from '@/api';

export const fetchPost = async (context, postId) => {
	try {
		context.commit('SET_LOADING_POST');
		const { data } = await customAxios.get(`/post/${postId}`);
		context.commit('SET_LOADED_POST');
		context.commit('SET_POST', data?.post);
		context.commit('SET_COMMENTS', data?.comments);
	} catch (error) {
		context.commit('SET_ERROR_POST');
		console.log(error);
	}
};

export const fetchCreateComment = async (context, comment) => {
	try {
		context.commit('SET_LOADING_CREATE_COMMENT');
		const { data } = await customAxios.post('/comment/create', comment);
		context.commit('SET_LOADED_CREATE_COMMENT');
		context.commit('ADD_COMMENT', data?.comment);
	} catch (error) {
		context.commit(
			'SET_ERROR_CREATE_COMMENT',
			'TODO: SET_ERROR_CREATE_COMMENT'
		);
		console.log(error);
	}
};
