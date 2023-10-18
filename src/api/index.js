import axios from 'axios';

const customAxios = axios.create({
	/* eslint-disable no-undef */
	baseURL: process.env.VUE_APP_BASE_URL,
});

customAxios.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default customAxios;
