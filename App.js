
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Routes from './src/Routes';

export default class App extends Component{

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"
        />
        <Routes/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container :{
    backgroundColor: '#455a64',
    flex: 1,
  }
})


