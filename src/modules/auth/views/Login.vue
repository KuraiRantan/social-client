<template>
	<div class="login-container">
		<div>
			<form action="">
				<input
					v-model="form.identifier"
					type="text"
					class="input-auth"
					placeholder="Username/Email"
					autocomplete="username"
				/>
				<input
					v-model="form.password"
					type="password"
					class="input-auth"
					placeholder="Password"
					autocomplete="current-password"
				/>
				<button
					type="submit"
					class="button-auth"
					@click="onLogin"
				>
					LOGIN
				</button>
			</form>
			<div>
				<router-link :to="{ name: 'auth-register' }"
					>Crear cuenta</router-link
				>
				<router-link :to="{ name: 'auth-login' }"
					>¿Olvidaste tu contraseña?</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			form: {
				identifier: '',
				password: '',
			},
		};
	},
	methods: {
		...mapActions('user', ['login']),
		...mapActions('socket', ['connectSocket']),
		async onLogin() {
			const isLogin = await this.login(this.form);
			if (isLogin) {
				this.connectSocket();
				this.$router.push({ name: 'home' });
			}
		},
	},
};
</script>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 100vw;
	min-height: 100vh;
}

form {
	width: 600px;
}
</style>
