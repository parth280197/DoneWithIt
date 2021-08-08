import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/cards/AppCard';
import routes from '../navigation/routes';

import Screen from './../components/screens/Screen';
import colors from './../utils/colors';

const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
  ];

function ListingScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={({id}) => id.toString()}
            renderItem={({ item }) => (
              <AppCard
                title={item.title}
                subTitle={"$" + item.price}
                image={item.image}
                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              />
            )}
          />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        padding: 8,
    }
})

export default ListingScreen;