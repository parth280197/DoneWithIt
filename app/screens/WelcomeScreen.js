import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors.js';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image resizeMode='contain' style={styles.logo} source={require('../assets/logo-red.png')}></Image>
                <Text>Sell what you don't need</Text>
            </View>
            <View>
                <View style={styles.loginButton} />
                <View style={styles.registerButton} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'space-between',
    },
    logoContainer: {
        top: 60,
        alignItems:'center'
    },
    logo: {
        width:100,
        height: 100,
    },
    loginButton: {
        width: '100%',
        height: 70,
        alignSelf: 'flex-end',
        backgroundColor: colors.primary
    },
    registerButton: {
        width: '100%',
        height: 70,
        alignSelf: 'flex-end',
        backgroundColor: colors.secondary
    }
});

export default WelcomeScreen;