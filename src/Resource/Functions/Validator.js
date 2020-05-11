const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatPhone = /^\d{9}$/;
const maxCharacterPhone = 9;
const formatPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;

const Validator = (type, value) => {
    switch (type) {
        case 'email':
            if(formatEmail.test(value)) {
                return { error: ''};
            }
            return {
                error: 'Ingresa un formato valido. ej: usuario@dominio.com.',
                value
            }
        case 'password': 
            if(formatPassword.test(value)) {
                return { error: ''};
            }
            return {
                error: 'Minimo 8 caracteres, debe incluir como minimo caracteres especiales, numeros y una letra en mayuscula.',
                value
            }
        case 'phoneNumber':
            if(formatPhone.test(value)) {
                return { error: '' }
            }
            return {
                error: 'Ingresa un numero telefonico valido.',
                value
            }
        default:
            return {
                error: ''
            }
    }
}

export default Validator;