import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../modules/app-module/screens/dashboard';
import Details from '../modules/app-module/screens/details';

const Stack = createNativeStackNavigator();

const InitialNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'dashboard'} component={Dashboard} />
      <Stack.Screen name={'details'} component={Details} />
    </Stack.Navigator>
  );
};

export default InitialNavigation;
