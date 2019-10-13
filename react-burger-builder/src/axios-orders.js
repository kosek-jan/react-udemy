import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burgerbuilder-8f3da.firebaseio.com/"
});

export default instance;