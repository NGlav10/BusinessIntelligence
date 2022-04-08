/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator.Navigator>
          <MainNavigator.Screen name="Home" component={Businesses} />
          <MainNavigator.Screen name="Profile" component={BusinessDetail} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
