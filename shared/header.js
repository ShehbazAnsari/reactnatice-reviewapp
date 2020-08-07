import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground,Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {

  const OpenMenu = () => {
    navigation.openDrawer()
  }
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons name="menu" size={28} onPress={OpenMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    //width:Dimensions.get('screen').width,
    
    height:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    marginHorizontal: 5,
  },
  icon: {
 
  }
  ,
  headerImage: {
    width: 26,
    height: 26
  },
  headerTitle: {
    flexDirection: 'row',
    marginHorizontal: 10
  }
})