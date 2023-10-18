import customAxios from '@/api';

export const fetchMessages = async (context, username) => {
	try {
		const { data } = await customAxios.get(`/message/${username}`);
		context.commit('SET_MESSAGES', data);
	} catch (error) {
		console.log(error);
	}
};

export const fetchSendMessage = async (context, message) => {
	try {
		const { data } = await customAxios.post('message/create', message);
		context.commit('ADD_MESSAGE', data);
	} catch (error) {
		console.log(error);
	}
};
