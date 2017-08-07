import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import { List, ListItem } from 'react-native-elements'
import React from 'react'

export default class OrdersScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: {}
        }
    }

	  componentDidMount() {
      const url = "http://192.168.1.11:8000/api/categories?format=json";
        return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              data: responseJson,
            }, function() {
              // do something with new state
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }


    render() {
        _keyExtractor = (item) => item.id
      return (
        <List>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item.name}
                subtitle={item.name}
                avatar={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
              />
            )}
            keyExtractor={_keyExtractor}
          />
        </List>
      );
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