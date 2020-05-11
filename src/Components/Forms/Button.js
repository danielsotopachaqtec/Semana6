import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    disabled: {
        backgroundColor: '#dddddd',
        opacity: 0.5
    }
})

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
    render(){
        const { onPressButton, styleButton, styleText, title, disabled, ...attributes } = this.props
        return (
            <View 
                pointerEvents={disabled ? "none" : "auto"}
                style={!disabled ? styleButton : [styleButton,styles.disabled]}
            >
                <TouchableOpacity
                    {...attributes}
                    onPress={onPressButton}
                    delayPressIn={0}
                    delayPressOut={0}
                    style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={styleText}>
                            {title}
                        </Text>
                </TouchableOpacity>
            </View>
            )
    }
}

export default Button;