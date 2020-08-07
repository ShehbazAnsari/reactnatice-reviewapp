import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import AboutStack from '../routes/aboutStack'
import HomeStack from '../routes/homeStack'

const screens = {
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  }
}

const RootDrawerNavigator = createDrawerNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee' }
  }
})

export default createAppContainer(RootDrawerNavigator)