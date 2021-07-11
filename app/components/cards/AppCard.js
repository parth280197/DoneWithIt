import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../utils/colors';
import AppText from '../texts/AppText';

function AppCard({title,subTitle,image}) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.textContainer}>
                <AppText style={styles.titleText}>{title}</AppText>
                <AppText style={styles.subTitleText}>{subTitle}</AppText>
            </View>
        </View>
    );
}

export default AppCard;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        borderRadius: 12,
        width: '100%',
        overflow: 'hidden',
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        padding: 12,
    },
    titleText: {
        marginBottom: 4,
    },
    subTitleText: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})