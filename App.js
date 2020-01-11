
import React from 'react';
import RestaurantList from 'components/RestaurantList';
import RestauranrInfo from 'components/RestaurantInfo';
import About from 'components/About';
import AddReview from 'components/AddReview';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestauranrInfo }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066cc'
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      color: '#ffffff'
    }
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: {screen: RootStack},
  About: {screen: About}
}, {
  defaultNavigationOptions: ({navigation}) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        const route = navigation.state.routeName;
        const name = {
          'Home': 'list',
          'About': 'info-circle'
        }[route];
        return <Icon name={name} size={20} color={tintColor} />
      },
      tabBarOptions: { 
        activeBackgroundColor: '#e6f0fa'
      }
    }
  }
});

const modalNavigator = createStackNavigator({
  Tabs: { screen: TabNavigator },
  AddReview: { screen: AddReview }
}, {
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: false
  }
});

const App = createAppContainer(modalNavigator);

export default App;
