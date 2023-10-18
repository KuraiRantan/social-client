<template>
	<div v-if="!getUserProfile">
		<p>User not found</p>
	</div>
	<div v-else>
		<ProfileHeader
			:id="getUserProfile.id"
			:first-name="getUserProfile.firstName"
			:last-name="getUserProfile.lastName"
			:username="getUserProfile.username"
			:birth-date="getUserProfile.birthDate"
			:country="getUserProfile.country"
			:city="getUserProfile.city"
			:bio="getUserProfile.bio"
			:photo="getUserProfile.photo"
			:friend-match-profile="friendMatchProfile"
			:its-my-profile="itsMyProfile"
		/>
		<main class="main-container">
			<MyPostCommentBox v-if="itsMyProfile" />

			<div class="posts-container">
				<Post
					v-for="{
						id,
						imgProfile,
						User,
						content,
						posted_at,
					} in posts"
					:id="id"
					:key="id"
					:img-profile="imgProfile"
					:name="`${User?.firstName} ${User?.lastName}`"
					:username="User?.username"
					:content="content"
					:posted-at="posted_at"
				/>
			</div>
		</main>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: {
		ProfileHeader: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "ProfileHeader" */ '../components/ProfileHeader.vue'
			)
		),
		MyPostCommentBox: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "MyPostCommentBox" */ '@/shared/components/MyPostCommentBox.vue'
			)
		),
		Post: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "Post" */ '@/shared/components/Post.vue'
			)
		),
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters('profile', ['posts', 'getUserProfile']),
		...mapGetters('user', ['getUserLoged', 'getFriends']),
		getParam() {
			return this.$route.params.username;
		},
		itsMyProfile() {
			if (!(this.getUserLoged && this.getUserProfile)) return false;
			return this.getUserLoged.id === this.getUserProfile.id;
		},
		friendMatchProfile() {
			if (!(this.getUserLoged && this.getUserProfile)) return false;
			const idProfile = this.getUserProfile.id;
			const friend = this.getFriends.find((value, index) => {
				return (
					value.user_id === idProfile || value.friend_id === idProfile
				);
			});
			return friend;
		},
	},
	watch: {
		getParam(newValue, oldValue) {
			this.loadProfile();
		},
	},
	created() {
		this.loadProfile();
	},
	methods: {
		...mapActions('profile', ['getPosts', 'fetchUserProfile']),
		loadProfile() {
			let username = this.$route.params.username;
			username = username.replace('@', '');
			this.fetchUserProfile(username);
		},
	},
};
</script>

<style scoped></style>
