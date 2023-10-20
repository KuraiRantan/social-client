<template>
	<div class="login-container">
		<div>
			<div class="users-data">
				<h2>Test users:</h2>
				<table>
					<tbody>
						<tr>
							<th>USERNAME</th>
							<th>EMAIL</th>
							<th>PASSWORD</th>
						</tr>
						<tr>
							<td>user1</td>
							<td>user1@mail.com</td>
							<td>user1</td>
						</tr>
						<tr>
							<td>user2</td>
							<td>user2@mail.com</td>
							<td>user2</td>
						</tr>
						<tr>
							<td>user3</td>
							<td>user3@mail.com</td>
							<td>user3</td>
						</tr>
					</tbody>
				</table>
			</div>
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
		async onLogin(e) {
			e.preventDefault();
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
/* TODO: Delete this rules.Some for deploy */
.users-data {
	position: absolute;
	top: 0;
	left: 50%; /* Centra horizontalmente */
	transform: translateX(-50%); /* Centra horizontalmente */
	width: min-content; /* Ancho del div (personalizable) */
	background: #ffffff; /* Color de fondo del div (puedes personalizarlo) */
	border: 1px solid #000; /* Borde (opcional) */
}

.users-data > h2 {
	padding: 0;
	margin: 0;
}

/* Estilo básico de la tabla */
table {
	width: 100%;
	border-collapse: collapse;
	font-family: Arial, sans-serif;
}

/* Encabezados de columna */
th {
	background-color: #f2f2f2;
	font-weight: bold;
	text-align: left;
	padding: 8px;
}

/* Celdas de datos */
td {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}

/* Filas alternas con fondo gris claro */
tr:nth-child(even) {
	background-color: #f2f2f2;
}

/* Resaltar fila al pasar el cursor */
tr:hover {
	background-color: #d3d3d3;
}

/* Alineación de texto en celdas específicas (por ejemplo, centrar la columna de "Precio") */
td.precio {
	text-align: right;
}

/* Cambiar el color del texto en celdas específicas (por ejemplo, color verde para la columna de "Estado") */
td.estado {
	color: green;
}
</style>
