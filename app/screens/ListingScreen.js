import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/cards/AppCard';
import routes from '../navigation/routes';

import Screen from './../components/screens/Screen';
import colors from './../utils/colors';
import listingApi from './../api/listings'


function ListingScreen({navigation}) {

   const [listings,setListings] = useState([]);

   useEffect(() => {
     loadListings();
   },[]);

   const loadListings = async () => {
    const response = await listingApi.getListings()
    setListings(response.data)
    console.log(response.data);
   }
 
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={({id}) => id.toString()}
            renderItem={({ item }) => (
              <AppCard
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images[0].url}
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