<template>
	<div class="post-box">
		<!-- :src="getUserLoged.photo" -->
		<img
			class="profile-img"
			src="https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg"
			alt="my-photo-profile"
		/>
		<textarea
			v-model="post.content"
			class="enter-content-post"
			placeholder="Post content"
		></textarea>
		<button @click="onSendPost">SEND</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			post: {
				content: '',
			},
		};
	},
	computed: {
		...mapGetters('user', ['getUserLoged']),
	},
	methods: {
		...mapActions('profile', ['createPost']),
		async onSendPost() {
			await this.createPost(this.post);
			this.post.content = '';
		},
	},
};
</script>

<style scoped>
.post-box {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
}

.enter-content-post {
	width: 100%;
	border-radius: 20px;
	padding-left: 10px;
	height: 1.8em;
	border: none;
	background-color: #d9d9d9;
	outline: none;
}
</style>
