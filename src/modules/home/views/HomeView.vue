<template>
	<main class="main-container">
		<MyPostCommentBox />
		<div>
			<button>All</button>
			<button>Classic</button>
			<button>Anonimous</button>
		</div>
		<div class="posts-container">
			<p v-if="friendsPosts?.length === 0">No hay post disponibles</p>
			<Post
				v-for="{
					id,
					imgProfile,
					User,
					content,
					posted_at,
				} in friendsPosts"
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
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: {
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
		...mapGetters('profile', ['friendsPosts']),
	},
	beforeMount() {
		this.getFriendsPosts();
	},
	methods: {
		...mapActions('profile', ['getFriendsPosts']),
	},
};
</script>

<style>
.posts-container {
	background-color: #d9d9d9;
	overflow: hidden;
	border-radius: 10px;
	width: 100%;
	margin: 0 auto;
}
</style>
