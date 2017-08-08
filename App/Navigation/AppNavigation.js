import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import SchoolSelectionScreen from '../Containers/SchoolSelectionScreen'
import CategoriesScreen from '../Containers/CategoriesScreen'
import StoresScreen from '../Containers/StoresScreen'
import NoMenuOrderScreen from '../Containers/NoMenuOrderScreen'
import MessagesScreen from '../Containers/MessagesScreen'
import ProfileScreen from '../Containers/ProfileScreen'

import { StyleSheet } from 'react-native'

import {Platform} from 'react-native'

import styles from './Styles/NavigationStyles'

const OrdersStack = StackNavigator({
  SchoolSelection: { screen: SchoolSelectionScreen },
  Categories: { screen: CategoriesScreen },
  Stores: { screen: StoresScreen },
  NoMenuOrder: { screen: NoMenuOrderScreen }
}, {
  headerMode: 'none',
  initialRouteName: 'SchoolSelection',
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