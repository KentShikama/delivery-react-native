import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import Row from 'react-native-row-component';
import React , { Component } from 'react'

export default class CheckoutScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = this.props.navigation.state.params.state
    }

    save_order = () => {
      const url = "http://192.168.1.11:8000/api/order";
      state_to_send = {
        store: this.state.store_id,
        item_quantities: this.state.item_quantities.map((x) => ({ amount: x.quantity, item: { name: x.item, store: this.state.store_id } })),
        delivery_location: this.state.delivery_location
      }
      if (this.state.promo_code != "") {
        state_to_send = Object.assign({}, state_to_send, {promo_code: this.state.promo_code})
      }
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state_to_send)
      })

      const { navigate } = this.props.navigation;
      navigate('Login', {  }) // TODO: pass state
    }


    render () {
	    return (
		   <View style={styles.container}>
			 <Text style={styles.welcome}>
			    Checkout from {this.state.store_name}
			 </Text>
                <List>
                <FlatList
                    data={this.state.item_quantities}
                    renderItem={({ item }) => (
                        <Text>{ item.item }{ item.quantity }</Text>
                    )}
                />
                </List>
                <Text>Promo Code</Text>
                  <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(promo_code) => this.setState({promo_code})}
                    value={this.state.promo_code}
                  />
                <Text>Delivery Location</Text>
                  <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(delivery_location) => this.setState({delivery_location})}
                    value={this.state.delivery_location}
                  />
                  <Text>Payments ...</Text>
                    <Text>Delivery Cost $4.99 + 15% order total</Text>
						<Button
							title="Submit Order"
							color="#841584"
							onPress={this.save_order}
						/>
		   </View>
	    )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
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