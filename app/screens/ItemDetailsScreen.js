import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import AppText from '../components/texts/AppText';
import { ListItem } from './../components/lists';
import routes from '../navigation/routes';

function ItemDetailsScreen({route}) {

    const item = route.params;

    return (
        <View>
            <Image style={styles.image} source={item.image}></Image>
            <View style={styles.textContainer}>
                <AppText style={styles.titleText}>{item.title}</AppText>
                <AppText style={styles.subTitleText}>{item.price}</AppText>
            </View>
            <ListItem image={require('../assets/jacket.jpg')} title={'Parth Patel'} subTitle={'5 listing item'} />
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
        fontWeight: 'bold'
    },
    subTitleText: {
        color: colors.secondary
    }
})

export default ItemDetailsScreen;