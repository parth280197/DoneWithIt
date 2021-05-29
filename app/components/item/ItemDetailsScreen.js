import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import AppText from '../texts/AppText';

function ItemDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../../assets/jacket.jpg')}></Image>
            <View style={styles.textContainer}>
                <AppText style={styles.titleText}>Jacket for sell!</AppText>
                <AppText style={styles.subTitleText}>$100</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
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

export default ItemDetailsScreen;