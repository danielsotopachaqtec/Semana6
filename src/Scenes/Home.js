import React, { Component } from 'react'
import { View, Text, Image, ScrollView, ImageBackground, StatusBar, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import firebase from '@react-native-firebase/app'
import remoteConfig from '@react-native-firebase/remote-config';
import { Post } from '../Components/Post'
// ES Modules syntax
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "OXxouhWwb4J81e_NVoaS5uqX-NTihadxGWFy8dAOMxA",
  // Optionally you can also configure a custom header to be sent with every request
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 500 // values set in ms
});
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
    }
})
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            postList: '',
            isFetching: false,
            data: []
        }
    }
    async componentDidMount(){
        console.warn('this.state.data', this.state.data)
        // this.getPost();
        
        // const parameters = remoteConfig().getAll();
        // console.warn('parameters', parameters)
        // const data = {}
        // Object.entries(parameters).forEach(([key, parameter]) => {
        //     data[key] = parameters[key].value
        // });
        // this.setState({
        //     data: data
        // })
        // console.warn('data', data)
        unsplash.photos.getRandomPhoto({ count: "10" })
        .then((res)=> {
            console.warn('res', res)
            return res.json();
        })
        .then(json => {
            console.warn('json', json)
        })
        .catch((error)=> console.warn('error', error))
        
    }
    getPost = () => {
        const { postList } = this.state;
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res)=> {
                return res.json();
            })
            .catch((error)=> console.warn('error', error))
            .then((res)=> this.setState({
                postList: res,
                isFetching: false
            }))
    }
    onRefresh = async() => {
        this.setState({
            isFetching: true
        })
       await this.getPost()
    }
    render(){
        const { postList, isFetching } = this.state;
        console.warn('isFetching', isFetching)
        return(
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                {postList ? (
                    <FlatList
                    data={postList}
                    renderItem={({item}) => (
                        <Post title={item.title} url={{uri: item.url}}/>
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
            </View>
        )
    }
}