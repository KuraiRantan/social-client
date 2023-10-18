<template>
	<div class="chat">
		<p class="user-info">
			<span class="name"
				>{{ selectedFriend?.firstName }}
				{{ selectedFriend?.lastName }}</span
			>
			<span class="username">@{{ selectedFriend?.username }}</span>
		</p>
		<div
			ref="chat"
			class="messages-container"
		>
			<h2>messages</h2>
			<p v-if="getMessages.length === 0">
				No hay mensajes, se el primero en saludar
			</p>
			<div
				v-for="{
					id,
					content: contentMessage,
					sender_id,
					sent_at,
				} in getMessages"
				:key="id"
				class="content-container"
				:class="
					sender_id === getUserLogedId
						? 'content-container-me'
						: 'content-container-other'
				"
			>
				<p
					class="content"
					:class="
						sender_id === getUserLogedId
							? 'content-me'
							: 'content-other'
					"
				>
					{{ contentMessage }}
				</p>
				<span class="date-message">{{ formatDateTime(sent_at) }}</span>
			</div>
		</div>
		<div class="send-message">
			<input
				id=""
				v-model="content"
				class="input-message"
				type="text"
				name=""
				placeholder="Enter message..."
				@keydown="handleSendMessage"
			/>
			<button
				class="btn-send-message"
				@click="handleSendMessage"
			>
				<i class="fa-solid fa-paper-plane"></i>
			</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { formatDateTime } from '@/helpers/dateFormats';
export default {
	async beforeRouteUpdate(to, from, next) {
		const username = to.params.username;
		await this.fetchMessages(username);
		this.scrollToBottom();
		next();
	},
	props: {
		selectedFriend: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			content: '',
		};
	},
	computed: {
		...mapGetters('chat', ['getMessages']),
		...mapGetters('user', ['getUserLoged']),
		getUserLogedId() {
			return this.getUserLoged?.id;
		},
		getFriend() {
			if (this.getMessages.length === 0) return;
			return this.getMessages[0].receiver.id !== this.getUserLogedId
				? this.getMessages[0].receiver
				: this.getMessages[0].sender;
		},
		// changedParam() {
		//   return this.$route.params.username;
		// },
	},
	async mounted() {
		const { username } = this.$route.params;
		await this.fetchMessages(username);
		this.scrollToBottom();
	},
	methods: {
		...mapActions('chat', ['fetchMessages', 'fetchSendMessage']),
		async handleSendMessage(e) {
			if (
				e.type === 'click' ||
				(e.type === 'keydown' && e.key === 'Enter')
			) {
				await this.fetchSendMessage({
					content: this.content,
					receiver_id: this.selectedFriend.id,
				});
				this.content = '';
				this.scrollToBottom();
			}
		},
		formatDateTime(dateTimeString) {
			return formatDateTime(dateTimeString);
		},
		scrollToBottom() {
			const { chat } = this.$refs;
			chat.scrollTop = chat.scrollHeight;
		},
	},
	//   watch: {
	//     changedParam() {
	//       const { username } = this.$route.params;
	//       this.fetchMessages(username);
	//     },
	//   },
};
</script>

<style scoped>
.chat {
	/* background-color: green; */
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}

.user-info {
	margin: 0;
	text-align: left;
	padding: 5px;
}

.name {
	font-weight: bold;
}

.username {
	font-style: italic;
	color: rgb(121, 121, 121);
}

.messages-container {
	height: calc(100% - 60px);
	overflow: auto;
}

.content-container {
	width: 100%;
	padding: 5px;
	box-sizing: border-box;
}

.content {
	display: inline-block;
	padding: 10px 5px;
	margin: 0;
	border-radius: 10px;
	width: auto;
}

.content-container-me {
	text-align: right;
}

.content-container-other {
	text-align: left;
}

.content-me {
	background-color: rgb(201, 252, 150);
}

.content-other {
	background-color: rgb(152, 152, 255);
}

.date-message {
	display: block;
	font-size: 0.8rem;
	color: gray;
	font-style: italic;
}

.send-message {
	height: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	padding: 0 5px;
}

.input-message {
	padding: 5px 10px;
	border-radius: 40px;
	width: 90%;
	outline: none;
	border: 0.5px solid gray;
}

.btn-send-message {
	/* width: 5%; */
	padding: 5px 10px;
	border: none;
	background-color: transparent;
	border-radius: 100%;
}

.btn-send-message:hover {
	color: aqua;
	background-color: black;
}
</style>
