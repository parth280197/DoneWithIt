import React from 'react';
import * as Yup from 'yup';

import { Image, StyleSheet, View } from 'react-native';
import { AppFormField, AppForm, SubmitButton } from './../components/forms'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function RegistrationScreen(props) {

    return (
        <View style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    autoCapitalize='words'
                    autoCorrect={false}
                    icon="account"
                    placeholder="name"
                />
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="login" />
            </AppForm>
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

export default RegistrationScreen;