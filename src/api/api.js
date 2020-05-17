import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

axios.interceptors.request.use((config) => {
  const apiKey = process.env.VUE_APP_MOVIEDB_API_KEY;
  config.params = config.params || {};
  config.params['api_key'] = apiKey;
  config.params['language'] = 'pt-BR';
  return config;
});

export default axios;
