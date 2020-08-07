import { createStackNavigator } from 'react-navigation-stack'
import About from '../screen/about'
import Header from '../shared/header'
import React from 'react'


const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About' />,
      }
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee' }
  }
})

export default AboutStack