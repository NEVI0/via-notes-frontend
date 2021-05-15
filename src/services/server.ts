import axios from 'axios';

const server = axios.create({
	baseURL: 'https://via-notes-backend.herokuapp.com/open-api'
});

export default server;
