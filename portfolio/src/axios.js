import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-hooks-update-fd3d8.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'Access-Control-Allow-Origin'; 

export default instance;