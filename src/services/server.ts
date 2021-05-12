import axios from 'axios';

const server = axios.create({
	baseURL: 'http://192.168.1.42:4500/api'
});

export default server;
