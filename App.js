/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Cards from './src/components/pages/Cards';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Cards />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
