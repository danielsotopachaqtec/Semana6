import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SliderHome from '../Components/Sliders/SliderHome'
import ItemHomeSlider from '../Components/Sliders/ItemHomeSlider'

const sliders = [
    {id: 1, image: require('../../assets/photo_product_slider_1.jpeg'), title: 'Step 1'},
    {id: 2, image: require('../../assets/photo_product_slider_2.jpeg'), title: 'Step 2'},
    {id: 3, image: require('../../assets/photo_product_slider_3.jpeg'), title: 'Step 3'},
    {id: 4, image: require('../../assets/photo_product_slider_4.jpeg'), title: 'Step 4'},
    {id: 5, image: require('../../assets/photo_product_slider_5.jpeg'), title: 'Step 5'},
    {id: 6, image: require('../../assets/photo_product_slider_6.jpeg'), title: 'Step 6'},
]

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <SliderHome>
                <FlatList
                    data={sliders}
                    renderItem={({item}) => (
                        <ItemHomeSlider image={item.image} title={item.title}/>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    horizontal={true}
                />
            </SliderHome>
        )
    }
}