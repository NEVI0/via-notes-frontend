import axios from 'axios';

const server = axios.create({
	baseURL: 'http://localhost:4500/open-api'
});

export default server;
