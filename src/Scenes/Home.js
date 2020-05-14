import React, { Component } from 'react'
import { View, Text, Image, ScrollView, ImageBackground, StatusBar, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { Post } from '../Components/Post'
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
            isFetching: false
        }
    }
    componentDidMount(){
        this.getPost()

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