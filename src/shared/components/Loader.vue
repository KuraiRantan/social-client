<template>
	<div class="spinner-container">
		<div
			class="spinner"
			:style="`background: radial-gradient(farthest-side, ${color} 94%, #0000) top/9px 9px no-repeat, conic-gradient(#0000 30%, ${color}); -webkit-mask: radial-gradient( farthest-side,#0000 calc(100% - 9px),#000 0);`"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		width: {
			type: String,
			default: '24px',
		},
		height: {
			type: String,
			default: '24px',
		},
		color: {
			type: String,
			default: '#008000',
			// default: "#028dff"
		},
	},
};
</script>

<style scoped>
.spinner {
	width: 24px;
	height: 24px;
	border-radius: 50%;
	animation: spinner-c7wet2 1s infinite linear;
}
.spinner-container {
	widows: 100%;
	/* height: 69px; */
	display: flex;
	justify-content: center;
	align-items: center;
}
@keyframes spinner-c7wet2 {
	100% {
		transform: rotate(1turn);
	}
}
</style>
