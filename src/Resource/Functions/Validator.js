const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatPhone = /^\d{9}$/;
const maxCharacterPhone = 9;
const minCharacterCard = 15;
const expireDate = 5;
const numbers = /^\d+$/;
const name = /^[a-zA-Z ]*$/;
const formatPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;

const Validator = (type, value) => {
    switch (type) {
        case 'email':
            if(formatEmail.test(value)) {
                return { error: ''};
            }
            return {
                error: 'Ingresa un formato válido. ej: usuario@dominio.com.',
                value
            }
        case 'password': 
            if(formatPassword.test(value)) {
                return { error: ''};
            }
            return {
                error: 'Mínimo 8 caracteres, debe incluir como minimo caracteres especiales, numeros y una letra en mayuscula.',
                value
            }
        case 'phoneNumber':
            if(formatPhone.test(value)) {
                return { error: '' }
            }
            return {
                error: 'Ingresa un número teléfonico valido.',
                value
            }
        case 'cardNumber':
            if(value.length >= minCharacterCard  ) {
                return { error: ''}
            }
            return {
                error: 'Ingresa un número de tarjeta válida',
                value
            }
        case 'name':
            if(name.test(value)) {
                return { error: '' }
            }
            return {
                error: 'por favor, ingrese solo letras',
                value
            }
        case 'expireDate':
            if(value.length === expireDate) {
                return { error: '' }
            }
            return {
                error: 'formato incorrecto',
                value
            }
        case 'number':
            if(numbers.test(value)) {
                return { error: '' }
            }
            return {
                error: 'formato incorrecto',
                value
            }
        default:
            return {
                error: ''
            }
    }
}

export default Validator;