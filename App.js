import React, { useState } from 'react';
import { View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Navigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
})


export default function App() {
  const [fontsLoaded, setLoaded] = useState(false)
  if (fontsLoaded) {
    return (
      <Navigator/>
    );
  }
  else {
    return(
    <AppLoading 
    startAsync={getFonts}
      onFinish={() => setLoaded(true)}
    />
    )}
}