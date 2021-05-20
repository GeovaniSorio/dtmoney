import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.254.13.77:3000/api'
})