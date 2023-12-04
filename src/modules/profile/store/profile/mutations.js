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

export const SET_LOADING_FRIENDS_POSTS = state => {
	state.isLoadingFriendsPosts = true;
	state.isErrorFriendsPosts = null;
};

export const SET_LOADED_FRIENDS_POSTS = state => {
	state.isLoadingFriendsPosts = false;
};

export const SET_ERROR_FRIENDS_POSTS = (state, message) => {
	state.isErrorFriendsPosts = message;
	state.isLoadingFriendsPosts = false;
};

export const SET_LOADING_CREATE_POST = state => {
	state.isLoadingCreatePost = true;
	state.isErrorCreatePost = null;
};

export const SET_LOADED_CREATE_POST = state => {
	state.isLoadingCreatePost = false;
};

export const SET_ERROR_CREATE_POST = (state, message) => {
	state.isErrorCreatePost = message;
	state.isLoadingCreatePost = false;
};

export const SET_LOADING_USER_PROFILE = state => {
	state.isLoadingUserProfile = true;
	state.isErrorUserProfile = null;
};

export const SET_LOADED_USER_PROFILE = state => {
	state.isLoadingUserProfile = false;
};

export const SET_ERROR_USER_PROFILE = (state, message) => {
	state.isErrorUserProfile = message;
	state.isLoadingUserProfile = false;
};
