import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import requireNativeComponent from 'requireNativeComponent'

export default class CaptureElement extends Component
{
  static propTypes = {
    enabled: PropTypes.boolean,
    ...View.propTypes
  }

  render()
  {
    return (
      <WindowsCaptureElement {...this.props} />
    )
  }
}

var WindowsCaptureElement = requireNativeComponent(
  'WindowsCaptureElement',
  null
)