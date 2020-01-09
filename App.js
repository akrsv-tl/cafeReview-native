
import React from 'react';
import RestaurantList from 'components/RestaurantList';
import RestauranrInfo from 'components/RestaurantInfo';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: RestaurantList
  },
  Info: {
    screen: RestauranrInfo
  }
});

const App = createAppContainer(RootStack);

export default App;