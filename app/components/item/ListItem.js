import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import AppText from '../texts/AppText';

function ListItem({image,title,subTitle,Icon}) {
    return (
        <View style={styles.container}>
            {Icon}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.textContainer}>
                <AppText style={styles.titleText}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitleText}>{subTitle}</AppText>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: colors.white
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 40
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 8
    },
    titleText: {
        fontWeight: '600',
        fontSize: 20
    },
    subTitleText: {
        color: colors.gray,
        fontWeight: '300',
        fontSize: 16
    }
})

export default ListItem;