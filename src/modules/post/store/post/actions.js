import customAxios from '@/api';

export const fetchPost = async (context, postId) => {
	try {
		const { data } = await customAxios.get(`/post/${postId}`);
		context.commit('SET_POST', data?.post);
		context.commit('SET_COMMENTS', data?.comments);
	} catch (error) {
		console.log(error);
	}
};

export const fetchCreateComment = async (context, comment) => {
	try {
		const { data } = await customAxios.post('/comment/create', comment);
		context.commit('ADD_COMMENT', data?.comment);
	} catch (error) {
		console.log(error);
	}
};
