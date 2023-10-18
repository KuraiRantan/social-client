<template>
	<div class="post-comment-box">
		<!-- :src="getUserLoged.imgProfile" -->
		<img
			class="profile-img"
			src="https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg"
			alt="my-photo-profile"
		/>
		<textarea
			v-model="postComment.content"
			class="enter-content-post-comment"
			:placeholder="
				typeBox === 'post' ? 'Post content' : 'Comment content'
			"
		></textarea>
		<button @click="typeBox === 'post' ? onSendPost() : onSendComment()">
			SEND
		</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	props: {
		typeBox: {
			type: String,
			default: 'post',
		},
		postId: {
			type: Number,
			required: false,
			default: null,
		},
		parentCommentId: {
			type: Number,
			required: false,
			default: null,
		},
	},
	data() {
		return {
			postComment: {
				content: '',
			},
		};
	},
	computed: {
		...mapGetters('user', ['getUserLoged']),
	},
	methods: {
		...mapActions('profile', ['createPost']),
		...mapActions('post', ['fetchCreateComment']),
		async onSendPost() {
			await this.createPost(this.postComment);
			this.postComment.content = '';
		},
		async onSendComment() {
			const comment = {
				...this.postComment,
				...(this.parentCommentId
					? { parent_comment_id: this.parentCommentId }
					: {}),
				post_id: this.postId,
			};
			await this.fetchCreateComment(comment);
			this.postComment.content = '';
		},
	},
};
</script>

<style scoped>
.post-comment-box {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
}

.enter-content-post-comment {
	width: 100%;
	border-radius: 20px;
	padding-left: 10px;
	height: 1.8em;
	border: none;
	background-color: #d9d9d9;
	outline: none;
}
</style>
