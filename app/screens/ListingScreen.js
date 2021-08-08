import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/cards/AppCard';

import routes from '../navigation/routes';
import AppButton from '../components/buttons/AppButton';
import Screen from './../components/screens/Screen';
import colors from './../utils/colors';
import listingApi from './../api/listings'
import AppText from '../components/texts/AppText';
import ActivityIndicator from '../components/Indicators/ActivityIndicator';
import useApi from '../hooks/useApi';


function ListingScreen({navigation}) {
  const getListingApi = useApi(listingApi.getListings)

   useEffect(() => {
    getListingApi.request();
   },[]);
 
    return (
        <Screen style={styles.screen}>
            {getListingApi.error && 
              <>
                <AppText style={{textAlign:'center',padding:10}}>
                  Sorry! Couldn't retrieve the listings.
                </AppText>
                <AppButton title="Retry" onPress={loadListings}/>
              </>
            }
            <ActivityIndicator visible={getListingApi.loading} />
            <FlatList 
            data={getListingApi.data}
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