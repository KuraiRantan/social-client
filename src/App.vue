<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
	<Navbar v-if="!isAuth" />
	<router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
	name: 'App',
	components: {
		Navbar: defineAsyncComponent(() =>
			import(
				/* webpackChunkName: "Navbar" */ '@/shared/components/Navbar.vue'
			)
		),
	},
	computed: {
		isAuth() {
			return this.$route.fullPath.startsWith('/auth');
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
}

body {
	margin: 0;
	padding: 0;
}

.input-auth {
	display: block;
	width: 100%;
	margin: 10px 0;
	border: none;
	outline: none;
	border-bottom: 1px solid gray;
	padding-bottom: 10px;
}

.button-auth {
	padding: 16px;
	border: none;
	border: 1px solid black;
	margin: 10px 0;
	border-radius: 10px;
	font-weight: bold;
}

.button-auth:hover {
	border: 1px solid green;
	color: green;
}
</style>
