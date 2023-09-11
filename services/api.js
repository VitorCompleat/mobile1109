import axios from "axios";

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/20030041/json/'
});

export default api;