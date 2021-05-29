import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../utils/colors';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.imageContainer}>
            <Entypo style={styles.closeIcon} name="cross" size={48} color="black" />
            <MaterialCommunityIcons style={styles.deleteIcon} name="delete" size={48} color="black" />
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
        color: colors.gray,
        width: 50,
        height: 50,
        top: 36,
        left: 12,
        position: 'absolute'
    },
    deleteIcon: {
        color: colors.mediumRed,
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