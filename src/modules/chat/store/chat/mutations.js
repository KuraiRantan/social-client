export const SET_MESSAGES = (state, messages) => {
	state.messages = messages;
};

export const ADD_MESSAGE = (state, message) => {
	const messages = state.messages.filter(m => m.id !== message.id);
	state.messages = [...messages, message];
};

export const SET_LOADING_MESSAGES = state => {
	state.isLoadingMessages = true;
	state.isErrorMessages = null;
};

export const SET_LOADED_MESSAGES = state => {
	state.isLoadingMessages = false;
};

export const SET_ERROR_MESSAGES = (state, message) => {
	state.isErrorMessages = message;
	state.isLoadingMessages = false;
};

export const SET_LOADING_SEND_MESSAGE = state => {
	state.isLoadingSendMessage = true;
	state.isErrorSendMessage = null;
};

export const SET_LOADED_SEND_MESSAGE = state => {
	state.isLoadingSendMessage = false;
};

export const SET_ERROR_SEND_MESSAGE = (state, message) => {
	state.isErrorSendMessage = message;
	state.isLoadingSendMessage = false;
};
