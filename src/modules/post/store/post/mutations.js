export const SET_POST = (state, post) => {
	state.post = post;
};

export const SET_COMMENTS = (state, comments) => {
	state.comments = comments;
};

export const ADD_COMMENT = (state, comment) => {
	state.comments.unshift(comment);
};
