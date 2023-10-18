export const SET_MESSAGES = (state, messages) => {
	state.messages = messages;
};

export const ADD_MESSAGE = (state, message) => {
	const messages = state.messages.filter(m => m.id !== message.id);
	state.messages = [...messages, message];
};
