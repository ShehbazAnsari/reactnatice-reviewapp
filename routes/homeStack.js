import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screen/home'
import ReviewDetails from '../screen/reviewDetails'
import Header from '../shared/header'
import React from 'react'



const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) =>{
      return {
        headerTitle: () => <Header navigation={navigation} title='Developer' />,
        
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'ReviewDetails'

    }
  },

}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee' }
  }
})

export default HomeStack