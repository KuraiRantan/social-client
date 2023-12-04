<template>
	<Suspense>
		<template #default>
			<Loader v-if="isLoadingUserProfile" />
			<div v-else>
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
					<MyPostCommentBox v-if="itsMyProfile" />
					<main class="main-container">
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
			</div>
		</template>
		<template #fallback>
			<Loader />
		</template>
	</Suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import Loader from '@/shared/components/Loader.vue';
import MyPostCommentBox from '@/shared/components/MyPostCommentBox.vue';

export default {
	components: {
		Loader: Loader,
		ProfileHeader: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "ProfileHeader" */ '../components/ProfileHeader.vue'
			)
		),
		MyPostCommentBox: MyPostCommentBox,
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
		...mapState('profile', ['isLoadingUserProfile', 'isErrorUserProfile']),
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
		...mapActions('profile', ['fetchUserProfile']),
		loadProfile() {
			let username = this.$route.params.username;
			username = username.replace('@', '');
			this.fetchUserProfile(username);
		},
	},
};
</script>

<style scoped></style>
