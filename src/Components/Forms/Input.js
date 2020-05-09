import React from 'react';
import { TextInput, StyleSheet } from 'react-native'
import Label from './Label';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
})

const Input = ({ children, value, onChange, TextInputStyle, onFocusInput, ...props }) => {
    focusInput = () => {
        onFocusInput();
    }
    return(
        <Label  {...props}>
            <TextInput value={value} onChangeText={onChange} style={[TextInputStyle, styles.container]} onFocus={focusInput} {...props}/>
        </Label>
    )
}

export default Input;