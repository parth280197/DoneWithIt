import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../utils/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: colors.dark
    },
    closeIcon: {
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        top: 36,
        left: 12,
        position: 'absolute'
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        width: 50,
        height: 50,
        top: 36,
        right: 12,
        position: 'absolute'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;