import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles/RootContainerStyle'
import * as Animatable from 'react-native-animatable'

export default class RootContainer extends Component {

  constructor(props: Object) {
    super(props)
    this.state = {
      someNumber: 0
    }
    
  }

  componentDidMount() {
    this.timer = window.setInterval(this._fpsFlub, 1000)
  }

  componentWillUnmount() {
    this.clearInterval(this.timer)
  }

  _fpsFlub = () => {
    const min = 30
    const max = 70
    let someNumber = Math.round(Math.random() * (max - min) + min) 
    this.setState({someNumber})
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.horizontal}>
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
                Render:{this.state.someNumber} fps.
              </Text>       
              <Text style={Styles.updateText}>
                Stream:0 fps. 
              </Text>   
            </View>
          </View>
          <View style={Styles.controlsSection}>
            <Animatable.View 
              animation="pulse" 
              iterationCount="infinite" 
              style={Styles.attendeesButton}
            >
              <Text style={Styles.attendeesText}>6</Text>
            </Animatable.View>
          </View>
        </View>
      </View>
    );
  }
}
