import React, { Component } from 'react'
import { View, Dimensions ,Text, Image, ScrollView, ImageBackground, StatusBar, StyleSheet, FlatList, SafeAreaView, BackHandler } from 'react-native'
import firebase from '@react-native-firebase/app'
import remoteConfig from '@react-native-firebase/remote-config';
import { Post } from '../Components/Post'
import CustomModal from '../Components/Modal/CustomModal'
import Button from '../Components/Forms/Button'
// ES Modules syntax
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "OXxouhWwb4J81e_NVoaS5uqX-NTihadxGWFy8dAOMxA",
  // Optionally you can also configure a custom header to be sent with every request
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 100 // values set in ms
});
const { height : viewPortHeight} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    post: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#ccc'
    },
    title: {
        flex: 0.5
    },
    description:{
        flex: 0.5
    },
    textButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#93278f',
        marginTop: 10,
        height: viewPortHeight * 0.08,
        borderRadius: 5
    },
})
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            postList: '',
            isFetching: false,
            data: '',
            images: [],
            isVisible: false,
            maintenance: false
        }
    }
    async componentDidMount(){
        try{
            const parameters = await remoteConfig().getAll();
            console.warn('parameters', parameters)
            const data = {}
            Object.entries(parameters).forEach(([key, parameter]) => {
                data[key] = parameters[key].value
            });
            this.setState({
                data: data
            })
            if(data.enable_post.value){
                await this.getImages();
            } else {
                this.setState({
                    maintenance: true
                })
            }
        } catch(err){
            console.warn('error firebase', err)
            await this.getImages();
        }
    }
    getImages = async () => {
        try {
        unsplash.photos.getRandomPhoto({ count: 10 })
        .then((res)=> {
            console.warn('res', res)
            return res.json();
        })
        .then(json => {
            console.warn('json', json)
            const imagesJson = json.map((item) => {
                 return item
            })
            this.setState({
                images: imagesJson,
                isFetching: false,
                isVisible: false
            })
        })
        } catch(err){
            this.setState({
                isVisible: true
            })
        }
    }
    onRefresh = async() => {
        this.setState({
            isFetching: true
        })
       await this.getImages()
    }
    render(){
        const { isFetching, images, data, isVisible, maintenance } = this.state;
        console.warn('isFetching', isFetching)
        return(
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                {images ? (
                    <FlatList
                    data={images}
                    renderItem={({item}) => (
                        <Post title={item.alt_description} url={{uri: item.urls.full}}/>
                    )}
                    keyExtractor={item => item.id}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={5}
                    updateCellsBatchingPeriod={500}
                    initialNumToRender={8}
                    windowSize={10}
                    onRefresh={()=> this.onRefresh()}
                    refreshing={isFetching}
                    />
                ) : null}
                <CustomModal
                    visible={isVisible}
                    backdrop={()=> this.setState({
                        isVisible: false
                    })}
                    title={'Algo anda mal'}
                    message={'No hemos podido consultar las publicaciones, intente nuevamente.'}
                    iconError={true}
                >
                    <Button 
                        onPressButton={() => {
                            this.getImages()
                            }}
                        styleButton={[styles.buttonContainer, styles.animation]}
                        styleText={styles.textButton}
                        title='Entendido'
                    />
                </CustomModal>
                <CustomModal
                    visible={maintenance}
                    backdrop={()=> {}}
                    title={'Estamos en mantenimiento'}
                    message={'Estamos trabajando para darle un mejor servicio, disculpe los inconvenientes.'}
                    icon={require('../../assets/mantenimiento.png')}
                >
                    <Button 
                        onPressButton={() => {
                            BackHandler.exitApp();
                            }}
                        styleButton={[styles.buttonContainer, styles.animation]}
                        styleText={styles.textButton}
                        title='Salir ahora'
                    />
                </CustomModal>
            </View>
        )
    }
}