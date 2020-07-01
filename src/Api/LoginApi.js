import FetchApi from './FetchApi';

const LoginApi = {
  signin: async (parameters) => {
    const data = await FetchApi.post('/users/signin', parameters);
    return data;
  },
  signup: async (parameters) => {
    const data = await FetchApi.post('/users/signup', parameters);
    return data;
  },
};

export default LoginApi;
