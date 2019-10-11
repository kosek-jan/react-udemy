import axios from 'axios';

// overrides default setting in index.js
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN FROM INSTANCE";

export default instance;