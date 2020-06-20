import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.18:3000',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Accept:  'application/json'
    }
  });
const parseBody = async(res) => {
    console.warn('res.status parseBody', res)
    if(res.status){
        try{
            if(res.status === 200 || res.status === 201) {
                return res.data
            } else {
                return parseError(res, res.status)
            }
        } catch(e){
            return parseError(res, res.status)
        }
    }
    return parseError(res, res.status)
}

const parseError = async(error, status) => {
    console.warn('error parseError', parseError, status)
    switch(status){
        case undefined:
            return error
            .text()
            .then(result => {
                console.warn(result)
                return {
                    errors: 'Probablemente tenemos inconvenientes con nuestro servicio, intentelo mas tarde',
                    status: error.code
                }
            })
            .catch(error => {
                if(error.code === 1000){
                    return {
                        errors: 'Error de red',
                        status: error.code
                    }
                }
            })
        case 400:
            return {
                errors: error.message,
                status
            }
        case 401:
            return {
                errors: error.message,
                status
            }
        case 403:
            return {
                errors: error.message,
                status
            }
        case 404:
            return {
                errors: 'Peticion fallida, intente nuevamente',
                status 
            }
        case 500:
            return {
                errors: 'Servicio no disponible',
                status
            }
        case 503:
            return {
                errors: 'Intentelo mas tarde',
                status
            }
        default: 
            return {
                errors: 'Probablemente tenemos inconvenientes con nuestro servicio, intentelo mas tarde',
                status
            }
    }
}

const FetchApi = {
    get: async(url) => {
        return instance.get(url)
        .then(result => {
            return parseBody(result)
        })
        .catch(error => {
            try {
                if(parseFloat(error.code) === 1000) {
                    return {
                        errors: "Error de red",
                        status: parseInt(error.code)
                    }
                }
                return parseError(null, 500)
            } catch(e){
                return parseError(null, 500)
            }
        })
    },
    post: async(url, parameters, config) => {
        return instance.post(url, parameters, config)
        .then(result => {
            return parseBody(result)
        })
        .catch(error => {
            try {
                if(parseFloat(error.code) === 1000) {
                    return {
                        errors: "Error de red",
                        status: parseInt(error.code)
                    }
                }
                return parseError(null, 500)
            } catch(e){
                return parseError(null, 500)
            }
        })
    },
    put: async(url, parameters, config) => {

    },
    patch: async(url, parameters, config) => {
        
    }
}

export default FetchApi