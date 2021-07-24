import React from 'react';
import { SafeAreaView } from 'react-native';
import AppTextInput from './app/components/inputs/AppTextInput';
import Screen from './app/components/screens/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  return (
    <SafeAreaView>
      <AppTextInput icon="email" placeholder="Email" />
      {/* <ListItem title="Parth" subTitle="Patel" ImageComponent={emailIcon} /> */}
    </SafeAreaView>
  );
};