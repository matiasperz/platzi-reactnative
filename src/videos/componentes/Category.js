import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Category = (props) => {
    return (
        <ImageBackground style={styles.wrapper} source={{
            uri: props.medium_cover_image
        }}>
            <Text style={styles.genre}> {props.genres[0]} </Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 110,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, .75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 15
    }
})

export default Category;