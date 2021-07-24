import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Image, StyleSheet, View } from 'react-native';
import AppButton from '../components/buttons/AppButton';
import AppFormField from '../components/forms/AppFormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./../assets/logo-red.png')}></Image>

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {
                    ({ handleSubmit }) => (
                        <>
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
                            <AppButton
                                title="login"
                                onPress={handleSubmit}
                            />
                        </>
                    )
                }
            </Formik>
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