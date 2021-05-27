import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/buttons/AppButton.js';
import colors from '../utils/colors.js';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image resizeMode='contain' style={styles.logo} source={require('../assets/logo-red.png')}></Image>
                <Text style={styles.tagLine}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=>{console.log("Login")}}/>
                <AppButton title="Register" color='secondary' onPress={()=>{console.log("Register")}}/>
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
    buttonContainer: {
        padding: 20,
    },
    tagLine: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
});

export default WelcomeScreen;