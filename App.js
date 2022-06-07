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
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Cards from './src/components/pages/Cards';

import store from './src/redux/store';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://api-dev.foodstyles.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Cards />
        </SafeAreaProvider>
      </Provider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
