import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../modules/app-module/screens/dashboard';
import Details from '../modules/app-module/screens/details';
import Login from '../modules/app-module/screens/login';

const Stack = createNativeStackNavigator();

const InitialNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      {/* <Stack.Screen name={'dashboard'} component={Dashboard} />
      <Stack.Group
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          presentation: 'transparentModal',
        }}>
        <Stack.Screen name={'details'} component={Details} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default InitialNavigation;
