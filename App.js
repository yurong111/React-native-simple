/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Head from './component/head/index.js'
import Music from './component/music/index.js'


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Head/>
        <Music/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  }
});
