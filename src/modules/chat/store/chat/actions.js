import customAxios from '@/api';

export const fetchMessages = async (context, username) => {
	try {
		context.commit('SET_LOADING_MESSAGES');
		const { data } = await customAxios.get(`/message/${username}`);
		context.commit('SET_LOADED_MESSAGES');
		context.commit('SET_MESSAGES', data);
	} catch (error) {
		context.commit('SET_ERROR_MESSAGES', 'TODO: SET_ERROR_MESSAGES');
		console.log(error);
	}
};

export const fetchSendMessage = async (context, message) => {
	try {
		context.commit('SET_LOADING_SEND_MESSAGE');
		const { data } = await customAxios.post('message/create', message);
		context.commit('SET_LOADED_SEND_MESSAGE');
		context.commit('ADD_MESSAGE', data);
	} catch (error) {
		context.commit(
			'SET_ERROR_SEND_MESSAGE',
			'TODO: SET_ERROR_SEND_MESSAGE'
		);
		console.log(error);
	}
};
