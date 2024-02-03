/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import InitialNavigation from './navigations';
import {Provider} from 'react-redux';
import store from './store';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <InitialNavigation />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
