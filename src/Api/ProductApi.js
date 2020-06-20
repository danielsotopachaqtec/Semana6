import FetchApi from './FetchApi'

const ProductApi = {
    getAllProduct: async() => {
        const data = await FetchApi.get('/products')
        return data
    }
}

export default ProductApi;