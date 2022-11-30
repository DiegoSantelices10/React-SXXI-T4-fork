import axios from "axios";

const baseURL = "https://ongapi.alkemy.org/api";

const config = {
	baseURL: baseURL,
	headers: {
		Group: 4, // Aqui va el ID del equipo!!
		"content-type": "application/json",
	},
};

const instance = axios.create(config);

const Put = async (endpoint, body) => {
	const response = {};
	await instance
		.put(`${endpoint}`, body, getHeaders())
		.then(res => (response.data = res.data))
}
	
const Get = async (endpoint, id = null) => {
	const response = {};
	await instance
		.get(`${endpoint}${id ? "/" + id : ""}`, getHeaders())
		.then(res => (response.data = res.data.data))
		.catch(err => (response.error = err));
	return response;
};

const Delete = (endpoint, id) => {
    const response = {};

    instance
        .delete(`${endpoint}/${id}`, getHeaders())
        .then(res => (response.data = res.data))
        .catch(err => (response.error = err));

    return response;
};

const getAuthorization = () => {
	const token = localStorage.getItem("token");
	return `Bearer ${token}`;
};

const getHeaders = () => {
	return {
		headers: {
			Authorization: getAuthorization(),
		},
	};
};

export {Put, Get, Delete};
