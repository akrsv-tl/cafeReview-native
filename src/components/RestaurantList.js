import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Image
} from 'react-native';

import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';

import PizzaImage from 'images/pizza.png';

const restaurants = [
  {name: 'React cafe', address: '123 Anywhere St', rating: 5},
  {name: 'Fancy Cafe', address: '123 Main St', rating: 3.5},
  {name: 'Taco cafe', address: '123 Maple Rd', rating: 4},
]

export default class RestaurantList extends React.Component {
  state = {
    search: null
  }

  render() {
    return(
      <View style={{
        flex: 1
      }}>
        <View style={{
          marginTop: 50,
          alignItems: 'center'
        }}>
          <Image source={PizzaImage} />
        </View>
        <Header />

        <TextInput 
          style={ styles.input }
          placeholder='Live search'
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search}
        />

        <FlatList
          data = { 
            restaurants.filter(place => {
              return !this.state.search ||
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem = {({ item, index }) => 
            <RestaurantRow 
              place={item}
              index={index}
              navigation={this.props.navigation}
            />
          }
          keyExtractor = {item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5'
  }
});