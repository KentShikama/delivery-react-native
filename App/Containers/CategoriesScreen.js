import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Break from '../Components/Break'
import React from 'react'

export default class CategoriesScreen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: {},
            school: this.props.navigation.state.params.query
        }
    }

	componentDidMount() {
      const url = "http://192.168.1.11:8000/api/categories?format=json&school=" + this.state.school;
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
        start_date = new Date(2011,1,11)
        end_date = new Date(2011,1,12)
        current_time = new Date(2011,2,13)
        const { navigate } = this.props.navigation;
        return (
	        <View style={styles.container}>
                <Text>{ this.state.school }</Text>
                <List>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                    <Break
                      type={{ uri: "http://192.168.1.11:8000/media/" + item.image }}
                      title={item.name}
                      start={start_date}
                      end={end_date}
                      duration="30"
                      onPress={() => navigate('Stores', { category_id: item.id })}
                      currentTime={current_time}
                      isCurrentDay="false"
                      isActive="false"
                    />
                )}
                keyExtractor={_keyExtractor}
                />
                </List>
			</View>

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