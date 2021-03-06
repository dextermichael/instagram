import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'

import feed from './app/screens/feed'
import upload from './app/screens/upload'
import profile from './app/screens/profile'

const Mainstack = createBottomTabNavigator (
  {
    Feed:{screen:feed},
    Upload:{screen:upload},
    Profile:{screen:profile}
  }

)

export default class App extends React.Component {
  render() {
    return (
      <Mainstack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


