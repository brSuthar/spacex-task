/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Login from './modules/app-module/screens/login';
// import InitialNavigation from './navigations';
// import {Provider} from 'react-redux';
// import store from './store';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>{'React Native'}</Text>
        <Login />
      </View>
    </SafeAreaView>
  );

  // return (
  //   <View style={styles.container}>
  //     <Provider store={store}>
  //       <NavigationContainer>
  //         <InitialNavigation />
  //       </NavigationContainer>
  //     </Provider>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default App;
