
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator'
import store from './src/store/index.js';



const App = () => {

  return (

    <>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    </>

  );
};

const styles = StyleSheet.create({

});

export default App;
