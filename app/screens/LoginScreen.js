import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppButton from '../components/buttons/AppButton';
import AppTextInput from '../components/inputs/AppTextInput';
import Screen from './../components/screens/Screen';


function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./../assets/logo-red.png')}></Image>
            <AppTextInput
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="email"
                keyboardType="email-address"
                textContentType="emailAddress"
            />
            <AppTextInput
                onChangeText={text => setPassword(text)}
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton
                title="login"
                onPress={() => { console.log(email, password) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20
    }
})

export default LoginScreen;