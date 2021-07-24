import React from 'react';
import { SafeAreaView } from 'react-native';
import AppTextInput from './app/components/inputs/AppTextInput';
import Screen from './app/components/screens/Screen';
import AppText from './app/components/texts/AppText';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  return (
    <SafeAreaView>
      <AppText>Test</AppText>
      {/* <ListItem title="Parth" subTitle="Patel" ImageComponent={emailIcon} /> */}
    </SafeAreaView>
  );
};