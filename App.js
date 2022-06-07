/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
