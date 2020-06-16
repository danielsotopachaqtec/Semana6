import React, { Component } from 'react'
import { View, Image, ScrollView, Text, FlatList, StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
        height: height * 0.30
    },
    image: {
        width: width * 0.60,
        height: height * 0.25,
        marginTop: 22
    },
    imageContainer: {
        flex: 0.6,
    },
    images: {
        width: width * 0.30,
        height: height * 0.12,
        marginVertical: 13     
    },
    imagesContainer: {
        flex: 0.4,
    }
})

export default class ImageProductDetail extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const { images, image }= this.props
        console.warn('images', images)
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                { images ? (
                    <Image 
                        source={image}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                ) : null}
                </View>
                <View style={styles.imagesContainer}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={120}
                        decelerationRate='fast'
                        nestedScrollEnabled={true}
                    >
                        { images && images.map((item, index)=> 
                            <Image 
                                source={item}
                                style={styles.images}
                                resizeMode={'contain'}
                            />
                        )
                        }
                    </ScrollView>
                </View>
                
            </View>
        )
    }   
}