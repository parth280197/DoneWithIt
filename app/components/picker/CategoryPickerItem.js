import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from '../icons/Icon';
import AppText from '../texts/AppText';

function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    name={item.icon}
                    backgroundColor={item.backgroundColor}
                    size={74}
                />
            </TouchableOpacity>
            <AppText style={styles.text}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: "center",
        width: "33%",
    },
    text: {
        marginTop: 5,
        textAlign: "center",
    }
})

export default CategoryPickerItem;