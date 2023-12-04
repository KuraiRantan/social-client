<template>
	<main class="main-container chats-container">
		<div class="list-container">
			<Suspense>
				<template #default>
					<ListChats
						:users="getFriendUsers"
						:set-selected-friend="setSelectedFriend"
					/>
				</template>
				<template #fallback>
					<Loader />
				</template>
			</Suspense>
		</div>
		<div class="separator"></div>
		<div class="chat-container">
			<router-view :selected-friend="selectedFriend" />
		</div>
	</main>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
import Loader from '@/shared/components/Loader.vue';

export default {
	components: {
		Loader: Loader,
		ListChats: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "ListChats" */ '../components/ListChats.vue'
			)
		),
	},
	data() {
		return {
			selectedFriend: {},
		};
	},
	computed: {
		...mapGetters('user', ['getFriendUsers']),
	},
	methods: {
		setSelectedFriend(friend) {
			this.selectedFriend = friend;
		},
	},
};
</script>

<style scoped>
.chats-container {
	display: grid;
	grid-template-columns: 300px 1px 1fr;
	grid-template-rows: calc(100vh - 75px);
}

.separator {
	width: 1px;
	height: 100%;
	background-color: gray;
}
</style>
