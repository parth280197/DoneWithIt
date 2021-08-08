import React from 'react';
import ListItem from '../components/lists/ListItem';
import Icon from './../components/icons/Icon';
import colors from "../utils/colors";
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from "../components/screens/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import routes from '../navigation/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES,
    },
];

function AccountScreen({navigation}) {

    const emailIcon = <Icon name={"email"} backgroundColor={colors.primary} />

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Parth" subTitle="Patel" image={require('../assets/parth.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                            onPress={()=>navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});


export default AccountScreen;