import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Styles from './Styles/RootContainerStyle'
import * as Animatable from 'react-native-animatable'
import WinGif from '../Components/WinGif'
import { Images, Colors } from '../Themes/'

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
            <View style={Styles.horizontal}>
              <Animatable.View 
                animation="pulse" 
                iterationCount="infinite" 
                style={Styles.attendeesButton}
              >
                <Image source={Images.user} style={Styles.user} />
                <Text style={Styles.attendeesText}>6</Text>
              </Animatable.View>
              <TouchableHighlight onPress={() => null} underlayColor={Colors.highlight}>
                <Image source={Images.chat} style={Styles.chat} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => null} underlayColor={Colors.highlight}>
                <Image source={Images.settings} style={Styles.settings} />
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={Styles.horizontal}>
          <WinGif source={Images.cat} />
          <WinGif source={Images.stairs} />
          <WinGif source={Images.beg} />
          <WinGif source={Images.typer} />
        </View>
      </View>
    );
  }
}
