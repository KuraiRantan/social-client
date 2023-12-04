<template>
	<div class="list-chats">
		<div>
			<input
				id=""
				class="search-user"
				type="search"
				name=""
				placeholder="Search user"
			/>
		</div>

		<!-- imgProfile, -->
		<router-link
			v-for="{ username, firstName, lastName, status, id } in users"
			:key="id"
			:to="{ name: 'chat-user', params: { username } }"
			@click="
				() =>
					setSelectedFriend({
						username,
						firstName,
						lastName,
						status,
						id,
					})
			"
		>
			<div class="user-chat">
				<div class="user-info">
					<!-- :src="imgProfile" -->
					<img
						class="profile-img"
						src="https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg"
						:alt="username"
					/>
					<p>
						<span>{{ firstName }}</span> <span>{{ lastName }}</span>
					</p>
				</div>

				<div
					:class="status === 'online' ? 'online' : 'offline'"
					class="status"
				></div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		users: {
			type: Array,
			required: true,
		},
		setSelectedFriend: {
			type: Function,
			required: true,
		},
	},
};
</script>

<style scoped>
.router-link-exact-active {
	display: block;
	background-color: rgb(233, 233, 233);
}

.list-chats {
	width: 100%;
	height: 100%;
}
.search-user {
	padding: 5px;
	border-radius: 40px;
	outline: none;
	border: 0.5px solid gray;
	width: 90%;
}
.user-chat {
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 10px 0;
}
.user-chat:hover {
	background-color: rgb(233, 233, 233);
}
.user-info {
	display: flex;
	align-items: center;
	column-gap: 5px;
}
.status {
	width: 10px;
	height: 10px;
	border-radius: 100%;
}
.online {
	background-color: green;
}
.offline {
	background-color: red;
}
</style>
