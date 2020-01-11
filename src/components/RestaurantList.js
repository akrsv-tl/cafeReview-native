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
  {name: 'React cafe', address: '123 Anywhere St', rating: 5, image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/f1/f3/be/aison-citronelle.jpg'},
  {name: 'Fancy Cafe', address: '123 Main St', rating: 3.5, image: 'https://www.restoclub.ru/uploads/place_thumbnail_big/1/6/0/8/1608f59e28244920fda77530950494cf.jpg'},
  {name: 'Taco cafe', address: '123 Maple Rd', rating: 4, image: 'https://www.restoclub.ru/uploads/place_thumbnail_big/2/7/6/1/276131cf65ed61a102551f46eec93c9c.jpg'},
]

export default class RestaurantList extends React.Component {

  static navigationOptions = {
    headerShown: false
  }

  state = {
    search: null
  }

  render() {
    return(
      <View style={{
        flex: 1,
        backgroundColor: '#fff'
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