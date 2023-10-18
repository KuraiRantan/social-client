import axios from 'axios';

const customAxios = axios.create({
	baseURL: 'http://localhost:3000',
});

customAxios.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default customAxios;
