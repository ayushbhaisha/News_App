import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const NewsDetailsScreen = (props) => {
    const {navigation} = props;

    const item = props.route.params.item;

    useEffect(() => {
        navigation.setOptions({
            title: 'News Details'
        })
    }, [navigation]);

    return(
        <View style={styles.mainContainer}>
            <Image style={styles.imageContainer} source={{uri: item.urlToImage}} />
            <View style={styles.textContainer}>
                {item.title && 
                    <Text style={styles.title}>{item.title}</Text>
                }
                {item.author || item.author !== '' ? 
                    <Text style={styles.subText}>Author: {item.author}</Text>
                    : <></>
                }
                {item.description && 
                    <Text style={styles.subText}>{item.description}</Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
    },
    imageContainer: {
        height: 300,
        width: '100%'
    },
    textContainer: {
        marginHorizontal: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30
    },
    subText: {
        paddingBottom: 15,
    }
});

export default NewsDetailsScreen;