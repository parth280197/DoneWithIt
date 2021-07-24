import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Image, StyleSheet, View } from 'react-native';
import AppButton from '../components/buttons/AppButton';
import AppTextInput from '../components/inputs/AppTextInput';
import ErrorMessage from '../components/forms/ErrorMessage';

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
                    ({ handleChange, handleSubmit, errors }) => (
                        <>
                            <AppTextInput
                                onChangeText={handleChange("email")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="email"
                                placeholder="email"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                            />
                            <ErrorMessage error={errors.email} />
                            <AppTextInput
                                onChangeText={handleChange("password")}
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon="lock"
                                placeholder="Password"
                                secureTextEntry
                                textContentType="password"
                            />
                            <ErrorMessage error={errors.password} />
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