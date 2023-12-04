<template>
	<Loader v-if="isLoadingPost" />
	<main
		v-else
		class="main-container"
	>
		<div class="post-container overflow">
			<Suspense>
				<template #default>
					<Post
						:key="getPost?.id"
						:img-profile="getPost?.imgProfile"
						:name="`${getPost?.User?.firstName} ${getPost?.User?.lastName}`"
						:username="getPost?.User?.username"
						:content="getPost?.content"
						:posted-at="getPost?.posted_at"
					/>
				</template>
				<template #fallback>
					<Loader />
				</template>
			</Suspense>
		</div>
		<div class="comment-container overflow">
			<MyPostCommentBox
				type-box="comment"
				:post-id="$route.params?.postId"
			/>
			<div
				v-for="{ id, User, content, commented_at } in getComments"
				:key="id"
			>
				<Suspense>
					<template #default>
						<Post
							:img-profile="User?.imgProfile"
							:name="`${User?.firstName} ${User?.lastName}`"
							:username="User?.username"
							:content="content"
							:posted-at="commented_at"
						/>
					</template>
					<template #fallback>
						<Loader />
					</template>
				</Suspense>
			</div>
		</div>
	</main>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import Loader from '@/shared/components/Loader.vue';

export default {
	components: {
		Loader: Loader,
		Post: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "PostContent" */ '@/shared/components/Post.vue'
			)
		),
		MyPostCommentBox: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "MyPostCommentBox" */ '@/shared/components/MyPostCommentBox.vue'
			)
		),
	},
	async beforeRouteUpdate(to, from, next) {
		const { postId } = to.params;
		if (postId) {
			await this.fetchPost(postId);
		}
		next();
	},
	computed: {
		...mapState('post', ['isLoadingPost', 'isErrorPost']),
		...mapGetters('post', ['getPost', 'getComments']),
	},
	mounted() {
		const { postId } = this.$route.params;
		this.fetchPost(postId);
	},
	methods: {
		...mapActions('post', ['fetchPost']),
	},
};
</script>

<style scoped>
.comment-container {
	/* width: 100%; */
	flex: 1;
	text-align: left;
}

.main-container {
	display: flex;
	gap: 10px;
	max-height: calc(100vh - 90px);
	overflow: auto;
}

.post-container {
	/* width: 100%; */
	flex: 1.5;
}

.overflow {
	overflow: auto;
}
</style>
