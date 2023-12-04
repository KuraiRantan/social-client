export const SET_POST = (state, post) => {
	state.post = post;
};

export const SET_COMMENTS = (state, comments) => {
	state.comments = comments;
};

export const ADD_COMMENT = (state, comment) => {
	state.comments.unshift(comment);
};

export const SET_LOADING_POST = state => {
	state.isLoadingPost = true;
	state.isErrorPost = null;
};

export const SET_LOADED_POST = state => {
	state.isLoadingPost = false;
};

export const SET_ERROR_POST = (state, message) => {
	state.isErrorPost = message;
	state.isLoadingPost = false;
};

export const SET_LOADING_CREATE_COMMENT = state => {
	state.isLoadingCreateComment = true;
	state.isErrorCreateComment = null;
};

export const SET_LOADED_CREATE_COMMENT = state => {
	state.isLoadingCreateComment = false;
};

export const SET_ERROR_CREATE_COMMENT = (state, message) => {
	state.isErrorCreateComment = message;
	state.isLoadingCreateComment = false;
};
