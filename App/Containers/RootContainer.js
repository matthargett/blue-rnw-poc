import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, PanResponder } from 'react-native';
import Styles from './Styles/RootContainerStyle'
import * as Animatable from 'react-native-animatable'
import WinGif from 'react-native-win-gif'
import { Images, Colors } from '../Themes/'
import Video from 'react-native-video'
import CaptureElement from './CaptureElement'

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
              {/*<Animatable.View 
                animation="pulse" 
                iterationCount="infinite" 
                style={Styles.attendeesButton}
              >
                <Image source={Images.user} style={Styles.user} />
                <Text style={Styles.attendeesText}>6</Text>
              </Animatable.View>*/}
              <View 
                style={Styles.attendeesButton}
              >
                <Image source={Images.user} style={Styles.user} />
                <Text style={Styles.attendeesText}>6</Text>
              </View>
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
        {/*<Video
          resizeMode='cover'
          source={{uri: "http://media.webcollage.net/rlfp/wc/live/module/dysonus/_cp/products/1442240961455/tab-d37c6a37-1c28-4b6e-b7c4-05c741aee9e6/fda17b82-dcc7-431d-88ab-7ca74d260b2a.mp4.mp4full.mp4"}}
          style={Styles.videoBackdrop}
          rate={1}
          volume={1}
          repeat={true}
        />*/}
        <CaptureElement
          enabled={true}
          style={Styles.videoBackdrop}
        />
        { this._renderTopStats() }
        <View style={Styles.horizontal}>     
          <Video
            source={{uri: "http://www.w3schools.com/html/mov_bbb.mp4"}}
            style={Styles.videoBox}
            rate={1}
            volume={1}
            repeat={true}
          />
          <Video
            source={{uri: "http://vid937.photobucket.com/albums/ad217/heyetter/4732video_zpse8eb65c8.mp4"}}
            style={Styles.videoBox}
            rate={1}
            volume={1}
            repeat={true}
          />
        </View>
        <View>

         
        </View>
        { this._renderDragMenu() }
      </View>
    );
  }
}
