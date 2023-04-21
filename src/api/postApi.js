import axios from '../config/axios';

export const createPost = input => axios.post('/posts', input);
