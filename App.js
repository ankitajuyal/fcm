/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import ReactNative, {
  View, Text
} from 'react-native';
import Header from './src/components/Header';
import GymList from './src/components/GymList';

// Create a Component
type Props = {};
export default class App extends Component<Props> {
  render() {
    return(
        <View style={{flex: 1}}>
          <Header headerText={'GYMSHIM'}/>
          <GymList/>
        </View>
      );
  }
}
// if scroll not working put this code  "style={{flex: 1}}" in root view tag