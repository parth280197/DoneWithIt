import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppCard from './app/components/cards/AppCard';
import Icon from './app/components/icons/Icon';
import ItemDetailsScreen from './app/components/item/ItemDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import colors from './app/utils/colors';
import Screen from './app/components/screens/Screen';
import ListItem from './app/components/item/ListItem';

export default function App() {

  const emailIcon = <Icon name={"email"} backgroundColor={colors.primary} />

  return (
      <Screen>
        <ListItem title="Parth" subTitle="Patel" ImageComponent={emailIcon} />
      </Screen>
    );
};