import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {WelcomeScreen} from '../screens/WelcomeScreen';
import {AddUserScreen} from '../screens/AddUserScreen';
import {RetailersScreen} from '../screens/RetailersScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Retailers" component={RetailersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
