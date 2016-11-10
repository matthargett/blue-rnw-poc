import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, PanResponder } from 'react-native';
import Styles from './Styles/RootContainerStyle'
import * as Animatable from 'react-native-animatable'
import WinGif from 'react-native-win-gif'
import { Images, Colors } from '../Themes/'

export default class RootContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      someNumber: 0
    }
    
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 0;
    this._previousTop = 0;
    this._dragStyles = {style: {}}
  }

  componentDidMount() {
    this.timer = window.setInterval(this._fpsFlub, 1000)
    this._updateNativeStyles()
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

  _renderTopStats = () => {
    return (
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
    )
  }

  _renderDragMenu = () => {
    // TODO: Clean this up, it's functional but kinda blah
    return (
      <View
        style={Styles.container}>
        <View
          ref={(dragBar) => {
            this.dragBar = dragBar;
          }}
          style={Styles.dragBar}
          {...this._panResponder.panHandlers}
        >
          <Text style={Styles.attendeesText} >Video Controls</Text>
        </View>
      </View>
    )
  }

  _handleStartShouldSetPanResponder (e, gestureState) {
    // Should we become active when the user presses down?
    return true;
  }

  _handleMoveShouldSetPanResponder (e, gestureState) {
    // Should we become active when the user moves a touch over?
    return true;
  }

  _handlePanResponderMove = (e, gestureState) => {
    this._dragStyles.style.left = this._previousLeft + gestureState.dx;
    this._dragStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  }

  _handlePanResponderEnd = (e, gestureState) => {
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }

  _updateNativeStyles() {
    this.dragBar && this.dragBar.setNativeProps(this._dragStyles);
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        { this._renderTopStats() }
        <View style={Styles.horizontal}>
          <WinGif source={Images.cat} style={Styles.videoBox} />
          <WinGif source={Images.stairs}  style={Styles.videoBox} />
          <WinGif source={Images.beg}  style={Styles.videoBox} />
          <WinGif source={Images.typer} style={Styles.videoBox}  />
          <WinGif source={{ uri: 'https://slack-imgs.com/?c=1&url=http%3A%2F%2Fstream1.gifsoup.com%2Fview2%2F1567149%2Fdun-dun-dun-o.gif'}} style={Styles.videoBox}  />
        </View>
        { this._renderDragMenu() }
      </View>
    );
  }
}
