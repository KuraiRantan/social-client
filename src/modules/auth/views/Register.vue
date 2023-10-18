<template>
	<div class="register-container">
		<div>
			<form action="">
				<input
					v-model="form.firstName"
					type="text"
					class="input-auth"
					placeholder="First name"
				/>
				<input
					v-model="form.lastName"
					type="text"
					class="input-auth"
					placeholder="Last name"
				/>
				<input
					v-model="form.birthDate"
					type="date"
					class="input-auth"
				/>
				<input
					v-model="form.country"
					type="text"
					class="input-auth"
					placeholder="Country"
				/>
				<input
					v-model="form.city"
					type="text"
					class="input-auth"
					placeholder="City"
				/>
				<textarea
					v-model="form.bio"
					class="input-auth"
					placeholder="Bio"
				></textarea>
				<input
					v-model="form.username"
					type="text"
					class="input-auth"
					placeholder="Username"
				/>
				<input
					v-model="form.email"
					type="email"
					class="input-auth"
					placeholder="Email"
				/>
				<input
					v-model="form.password"
					type="password"
					class="input-auth"
					placeholder="Password"
				/>
				<input
					v-model="form.repeatPassword"
					type="password"
					class="input-auth"
					placeholder="Repeat password"
				/>
				<button
					type="submit"
					class="button-auth"
					@click="onRegister"
				>
					REGISTER
				</button>
			</form>
			<router-link :to="{ name: 'auth-login' }"
				>Iniciar sesión</router-link
			>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			form: {
				firstName: '',
				lastName: '',
				birthDate: null,
				country: '',
				city: '',
				bio: '',
				username: '',
				email: '',
				password: '',
				repeatPassword: '',
			},
		};
	},
	methods: {
		...mapActions('user', ['register']),
		onRegister() {
			this.register(this.form);
		},
	},
};
</script>

<style scoped>
.register-container {
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
