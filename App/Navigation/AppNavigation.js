import { TabNavigator, TabBarBottom } from 'react-navigation'

import OrdersScreen from '../Containers/OrdersScreen'
import MessagesScreen from '../Containers/MessagesScreen'
import ProfileScreen from '../Containers/ProfileScreen'

import { StyleSheet } from 'react-native'

import {Platform} from 'react-native'

import styles from './Styles/NavigationStyles'

const TabNav = TabNavigator({
  Orders: { screen: OrdersScreen },
  Messages: { screen: MessagesScreen },
  Profile: { screen: ProfileScreen }
}, {
  key: 'Orders',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  headerMode: 'none',
  initialRouteName: 'Orders',
  tabBarOptions: {
    style: styles.tabBar,
    labelStyle: styles.tabBarLabel,
    activeTintColor: 'white',
    inactiveTintColor: 'white'
  }
})

export default TabNav