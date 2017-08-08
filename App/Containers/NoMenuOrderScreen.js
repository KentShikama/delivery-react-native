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

export default class NoMenuOrderScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            store_id: this.props.navigation.state.params.store_id,
            store_name: this.props.navigation.state.params.store_name,
            item: "Hello",
            quantity: "1",
            item_quantities: [{item:"Default",quantity:"1",key:"0"}]
        }
    }
    add_item = () => {
        previous_item_quantities = this.state.item_quantities
        item_quantities = previous_item_quantities.concat([{ item: this.state.item, quantity: this.state.quantity, key: previous_item_quantities.length.toString() }])
        this.setState({ item_quantities: item_quantities, item: "", quantity: "1" })
    }
    render () {
	    return (
		   <View style={styles.container}>
			 <Text style={styles.welcome}>
			    Orders - {this.state.store_name}
			 </Text>
			  <View style={{flex: 1, flexDirection: 'row'}}>
				  <View>
				  <TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(item) => this.setState({item})}
					value={this.state.item}
				  />
				  </View>
				  <View>
					<TextInput
					 keyboardType = 'numeric'
					 onChangeText = {(quantity)=> this.setState({quantity})}
					 value = {this.state.quantity}
					 maxLength = {10}  //setting limit of input
					/>
					</View>
					<View>
						<Button
							title="Add"
							color="#841584"
							onPress={this.add_item}
						/>
					</View>
				</View>

                <List>
                <FlatList
                    data={this.state.item_quantities}
                    renderItem={({ item }) => (
                        <Text>{ item.item }{item.quantity}</Text>
                    )}
                />
                </List>
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