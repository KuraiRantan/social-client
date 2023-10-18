<template>
	<div class="post">
		<router-link
			:to="{ name: 'post-details', params: { postId: id } }"
			class="post-link"
		>
			<div class="post-profile">
				<!-- :src="imgProfile" -->
				<div @click.prevent>
					<img
						class="profile-img"
						alt="photo-profile"
						src="https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg"
					/>
				</div>
				<router-link
					:to="{
						name: 'profile',
						params: { username: `@${username}` },
					}"
					class="post-link"
				>
					<p class="post-profile-info">
						<span class="post-name">{{ name }}</span>
						<span class="post-username">&nbsp;@{{ username }}</span>
						<span class="date-post"
							>&nbsp;&nbsp;&nbsp;{{
								formatDateTime(postedAt)
							}}</span
						>
					</p>
				</router-link>
			</div>
			<div>
				<p class="post-text">
					{{ content }}
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
import { formatDateTime } from '@/helpers/dateFormats';
export default {
	props: {
		id: {
			type: Number,
			required: true,
		},
		imgProfile: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		postedAt: {
			type: String,
			required: true,
		},
	},
	methods: {
		formatDateTime(dateTimeString) {
			return formatDateTime(dateTimeString);
		},
	},
};
</script>

<style scoped>
.post {
	border-bottom: 1px solid gray;
	padding: 5px 10px;
}

.post:last-of-type {
	border-bottom: none;
}

.post-profile {
	display: flex;
	gap: 10px;
	align-items: center;
}

.post-profile-info {
	text-align: left;
}

.post-name,
.post-username,
.date-post {
	display: inline-block;
}

.post-name {
	font-weight: bold;
}

.post-username {
	color: #646464;
}

.date-post {
	font-size: 0.8rem;
	color: gray;
	font-style: italic;
}

.post-text {
	margin: 0 0 0 60px;
	text-align: left;
}
</style>
