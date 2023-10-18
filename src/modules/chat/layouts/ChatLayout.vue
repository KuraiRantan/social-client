<template>
	<main class="main-container chats-container">
		<div class="list-container">
			<ListChats
				:users="getFriendUsers"
				:set-selected-friend="setSelectedFriend"
			/>
		</div>
		<div class="chat-container">
			<router-view :selected-friend="selectedFriend" />
		</div>
	</main>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
export default {
	components: {
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
	grid-template-columns: 300px 1fr;
	grid-template-rows: calc(100vh - 90px);
}
</style>
