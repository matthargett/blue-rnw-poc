import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles/RootContainerStyle'

export default class RootContainer extends Component {
  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.textSection}>
          <Text style={Styles.titleSection}>
            BlueJeans Design Sprint
          </Text>
            <Text>
              00:00
            </Text>
          <View style={Styles.horizontal}>
            <Text style={Styles.updateText}>
              0x0
            </Text>
            <Text style={Styles.updateText}>
              Hardware
            </Text>
            <Text style={Styles.updateText}>
              Render:49 fps.
            </Text>         
            <Text style={Styles.updateText}>
              Stream:0 fps. 
            </Text>   
          </View>
        </View>
      </View>
    );
  }
}
