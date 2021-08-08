import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({visible = false}) {

  return visible ? (<LottieView 
    source={require('../../assets/animations/loader.json')}
    autoPlay
    loop
  />) : <></>;
}

export default ActivityIndicator;