import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, StatusBar, ImageBackground} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as newsActions from '../store/actions/newsAction';

const NewsListingScreen = (props) => {
    const {navigation} = props;
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news);
    const [loading, setLoading] = useState(false);

    const loadNews = useCallback(async () => {
        setLoading(true);
        try{
            await dispatch(newsActions.fetchNews());
            setLoading(false);
        } catch (err) {
            console.log("error while load news", err);
            setLoading(false);
        }

    }, [dispatch, setLoading]);

    useEffect(() => {
        setLoading(true);
        loadNews().then(() => {
            setLoading(false);
        })
    }, [loadNews]);

    useEffect(() => {
        navigation.setOptions({
            title: 'Top Headlines'
        })
    }, [navigation]);

    if(loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' />
            </View>
        );
    }

    const itemHandler = (item) => {
        navigation.navigate('NewsDetails', {item})
    }

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.renderItemContainer} onPress={() => itemHandler(item)}>
            <ImageBackground 
                imageStyle={styles.backgroundStyle}
                source={{uri: item.urlToImage}}
                style={styles.items}
            >
                <View style={styles.itemStyle}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    return(
        <SafeAreaView style={styles.mainContainer}>
            {news && 
            <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={news.top_headlines}
                keyExtractor={item => item.publishedAt.toString()}
                renderItem={renderItem}
                numColumns={2}
            /> }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
    },
    centered: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    renderItemContainer: {
        width: 190,
        height: 200,
        padding: 4
    },
    backgroundStyle: {
        width: '100%',
        height: '100%'
    },
    items: {
        flex:1,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 4,
        elevation: 4
    },
    itemStyle: {
        flex:1,
        justifyContent: 'flex-end',
        margin: 10
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    }
});

export default NewsListingScreen;