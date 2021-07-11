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

export default function App() {
  return (
      <Screen>
        <Icon name="format-list-bulleted"></Icon>
      </Screen>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 100,
  }
})
