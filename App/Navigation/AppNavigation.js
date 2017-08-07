import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import CategoriesScreen from '../Containers/CategoriesScreen'
import StoresScreen from '../Containers/StoresScreen'
import MessagesScreen from '../Containers/MessagesScreen'
import ProfileScreen from '../Containers/ProfileScreen'

import { StyleSheet } from 'react-native'

import {Platform} from 'react-native'

import styles from './Styles/NavigationStyles'

const OrdersStack = StackNavigator({
  Categories: { screen: CategoriesScreen },
  Stores: { screen: StoresScreen }
}, {
  headerMode: 'none',
  initialRouteName: 'Categories',
  cardStyle: styles.card
})

const TabNav = TabNavigator({
  Orders: { screen: OrdersStack },
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