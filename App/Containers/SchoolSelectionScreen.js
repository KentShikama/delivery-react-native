import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CategoryAutocomplete from "../Components/CategoryAutocomplete"

import React from 'react'

export default class ProfileScreen extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
	    return (
		   <View style={styles.container}>
				<CategoryAutocomplete />
		   </View>
	    )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});