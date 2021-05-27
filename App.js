import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppCard from './app/components/cards/AppCard';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import colors from './app/utils/colors';

export default function App() {
  return (
      <>
        <View style={styles.container}>
          <AppCard title={'Jacket for sell!'} subTitle={'$100'} image={require('./app/assets/jacket.jpg')}></AppCard>
        </View>
        {/* <WelcomeScreen /> */}
        {/* <ViewImageScreen /> */}
      </>
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
