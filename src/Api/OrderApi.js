import FetchApi from './FetchApi'
import LocalStorage from '../Resource/Functions/local'

const OrderApi = {
    createOrder: async(parameters) => {
        const token = await LocalStorage.getKeyStorage('token')
        const userId = await LocalStorage.getKeyStorage('userId')
        parameters.user = userId
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }
        console.warn('config', config)
        console.warn('parameters', parameters)
        const data = await FetchApi.post('/orders', parameters, config)
        return data
    },
    getOrders: async(parameters) => {
        const token = await LocalStorage.getKeyStorage('token')
        const userId = await LocalStorage.getKeyStorage('userId')
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        }
        console.warn('config', config)
        console.warn('parameters', parameters)
        const data = await FetchApi.get(`orders/user/${userId}`,config)
        return data
    }
}

export default OrderApi