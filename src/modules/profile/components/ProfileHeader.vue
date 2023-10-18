<template>
	<div class="profile-container">
		<div class="profile-ornament">
			<p>
				<span>{{ firstName }} {{ lastName }}</span>
				<span>@{{ username }}</span>
			</p>
			<p>{{ birthDate }} - 24</p>
			<p>{{ country }} - {{ city }}</p>
			<div v-if="!itsMyProfile">
				<button
					v-if="
						!friendMatchProfile ||
						friendMatchProfile.status === 'refused'
					"
					@click="() => sendRequestFriend('pending')"
				>
					Add friend
				</button>
				<button
					v-if="friendMatchProfile?.status === 'acepted'"
					@click="() => sendRequestFriend('refused')"
				>
					Unfollow
				</button>
				<div v-if="friendMatchProfile?.status === 'pending'">
					<span v-if="friendMatchProfile.user_id !== id"
						>Send invite:
					</span>
					<button
						v-if="friendMatchProfile.user_id === id"
						@click="() => sendRequestFriend('acepted')"
					>
						Acept
					</button>
					<button @click="() => sendRequestFriend('refused')">
						{{
							friendMatchProfile.user_id !== id
								? 'Cancel'
								: 'Decline'
						}}
					</button>
				</div>
			</div>
		</div>
		<div class="profile-info">
			<div>
				<!-- :src="photo" -->
				<img
					src="https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg"
					:alt="username"
				/>
			</div>
			<div class="bio-container">
				<p class="bio">
					{{ bio }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: {
		id: {
			type: Number,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		birthDate: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
		friendMatchProfile: {
			type: Object,
			required: true,
		},
		itsMyProfile: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		...mapActions('user', ['fetchFriendRequest']),
		sendRequestFriend(operation) {
			this.fetchFriendRequest({
				friend_id: this.id,
				operation,
			});
		},
	},
};
</script>

<style scoped>
.profile-container {
	position: relative;
	margin-bottom: 40px;
}

.profile-ornament {
	min-height: 100px;
	background: linear-gradient(180deg, #b373f5 0%, #2f0059 100%);
	min-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	padding-left: 140px; /* 120px + separacion de 20px */
	box-sizing: border-box;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	color: white;
}

.profile-info {
	display: flex;
	align-items: center;
	width: 80%;
	text-align: left;
}
.profile-ornament p {
	margin: 0;
}

img {
	display: inline-block;
	width: 100px;
	height: 100px;
	border-radius: 100%;
	position: absolute;
	top: 50px;
	margin-left: 20px; /* Separacion foto */
}

.bio-container {
	padding-left: 140px; /* 120px + separacion de 20px */
	width: 100%;
}

.bio {
	margin: 0;
}
</style>
