export const SET_USER_PROFILE = (state, userProfile) => {
	state.userProfile = userProfile;
};

export const ADD_POST = (state, post) => {
	state.posts.unshift(post);
};

export const SET_POSTS = (state, posts) => {
	state.posts = posts;
};

export const ADD_FRIENDS_POST = (state, post) => {
	state.friendsPosts.unshift(post);
};

export const SET_FRIENDS_POSTS = (state, posts) => {
	state.friendsPosts = posts;
};
