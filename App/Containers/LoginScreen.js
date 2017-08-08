import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';

import React from 'react'

export default class LoginScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

  componentDidMount() {
    return new Promise( ( resolve, reject ) => {
        Linking.openURL( 'https://github.com/login/oauth/authorize?client_id=ed113d8609243d0a5bbe&scope=profile' );
        // TODO: Handle response back from github
        // TODO: Add other providers
    } );

  }

    render () {
	    return (
		   <View style={styles.container}>
			 <Text style={styles.welcome}>
				Will become login screen
				{this.state.auth}
			 </Text>
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