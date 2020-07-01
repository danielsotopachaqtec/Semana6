import FetchApi from './FetchApi';
import LocalStorage from '../Resource/Functions/local';

const PaymentApi = {
  payment: async (parameters) => {
    const token = await LocalStorage.getKeyStorage('token');
    const userId = await LocalStorage.getKeyStorage('userId');
    const email = await LocalStorage.getKeyStorage('email');
    parameters.user = userId;
    parameters.email = email;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = await FetchApi.post('/payment', parameters, config);
    return data;
  },
};

export default PaymentApi;
