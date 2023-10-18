import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import '@/css/styles.css';

createApp(App).use(store).use(router).mount('#app');

window.addEventListener('beforeunload', function () {
	store.commit('socket/disconnectSocket');
});

alert(`
  TODO:
  -Agregar apartado de comentarios a posts en el profile
  -Busqueda de usuarios(en chat y usuarios en general)
  -Permitir dar like a posts
  -Implementar filtros para todos los post, classic y anonimous
  -Agregar check para envio de post anonimos
  -Administración de perfil del usuario
  -Implementacion de marcadores
  -Vistas de errores de conexios
  -Vistas de loaders de peticiones
`);
