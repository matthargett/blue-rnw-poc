// @flow

import React, { Component } from 'react'
import RootContainer from './RootContainer'

/**
 * Provides an entry point into our application. 
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
export default class App extends Component {
  render () {
    return (
      <RootContainer />
    )
  }
}
