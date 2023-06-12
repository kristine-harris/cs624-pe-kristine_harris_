// Updated App.js for tab- and stack-driven navigations
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Countries from './src/Countries/Countries'
import Country from './src/Countries/Country'
import AddCountry from './src/AddCountry/AddCountry'

import { colors } from './Theme'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CountriesStackScreen ({navigation, route}){
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
      }}>
      <Stack.Screen name="Countries" component={Countries} initialParams={{
        countries: route.params.countries,
        addCountries: route.params.addCountry,
        addCurrency: route.params.addCurrency}} />
      <Stack.Screen name="Country" component={Country} initialParams={{
        countries: route.params.countries,
        addCountry: route.params.addCountry,
        addCurrency: route.params.addCurrency}}/>
      </Stack.Navigator>
    );
}

export default class App extends Component {
  state = {
    countries: []

  }
  addCountry = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }
  addCurrency = (currency, country) => {
    const index = this.state.countries.findIndex(item => {
      return item.id === country.id
    })
    const chosenCountry = this.state.countries[index]
    chosenCountry.currencies.push(currency)
    const countries = [
      ...this.state.countries.slice(0, index),
      chosenCountry,
      ...this.state.countries.slice(index + 1)
    ]
    this.setState({
      countries
    })
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="CountriesNav" initialParams={{countries: this.state.countries,addCountry: this.addCountry,addCurrency: this.addCurrency}} component={CountriesStackScreen} />
          <Tab.Screen name="AddCountry"   initialParams={{countries: this.state.countries,addCountry: this.addCountry,addCurrency: this.addCurrency}} component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}