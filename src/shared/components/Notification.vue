<template>
	<div class="notifications-container">
		<h2 class="title">Notifications</h2>
		<div
			v-for="{ id, message, read } in notifications"
			:key="id"
			class="notification-container"
		>
			<img
				class="img-user"
				src="https://www.robertwalters.com.my/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg"
				alt=""
			/>
			<span :class="read ? 'read' : 'no-read'">* {{ message }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		notifications: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
span {
	margin: 10px 0;
	padding: 0;
	font-weight: normal;
}

.title {
	text-align: center;
	font-weight: lighter;
	font-size: 1.6rem;
	margin: 0 0 5px;
	border-bottom: 3px solid rgb(207, 207, 207);
}

.notification-container {
	display: flex;
	align-items: center;
	gap: 10px;
	border-bottom: 1px solid rgb(207, 207, 207);
}

.notification-container:last-child {
	border-bottom: none;
}

.img-user {
	width: 44px;
	height: 44px;
	max-width: 44px;
	max-height: 44px;
	object-fit: cover;
	border-radius: 100%;
	vertical-align: middle;
}

.notifications-container {
	padding: 10px;
	border-radius: 5px;
	width: 400px;
	max-height: calc(100vh - 100px);
	overflow: auto;
	position: fixed;
	z-index: 100;
	/* background-color: #2c3e50; */
	background-color: #ffffff;
	color: rgb(0, 0, 0);
	right: 0;
	text-align: left;
	margin-right: 5px;
	border: 1px solid rgb(207, 207, 207);
}

.read {
	/* text-decoration: line-through; */
	font-style: normal;
	font-weight: lighter;
}

.no-read {
	font-style: italic;
	font-weight: bold;
}
</style>
