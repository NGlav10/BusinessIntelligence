/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './appTheme';
import { StatusBar } from 'react-native';

const MainNavigator = createStackNavigator();

const App = () => {
  StatusBar.setBarStyle('light-content', true);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          dark: true,
          colors: {
            ...DefaultTheme.colors,
            primary: colors.white,
            text: colors.white,
            card: colors.black,
          },
        }}>
        <MainNavigator.Navigator
          screenOptions={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}>
          <MainNavigator.Screen name="Home" component={Businesses} />
          <MainNavigator.Screen name="Profile" component={BusinessDetail} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
