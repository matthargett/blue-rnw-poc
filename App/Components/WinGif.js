// @flow

import React, { PropTypes } from 'react'
import { Text, Image, View } from 'react-native'
import styles from './Styles/WinGifStyle'
import requireNativeComponent from 'requireNativeComponent'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'


export default class WinGif extends React.Component {

  static propTypes = {
    src: PropTypes.object,
    ...View.propTypes
  }

  render () {
    const source = resolveAssetSource(this.props.source || {})

    let uri = source.uri
    if (uri && uri.match(/^\//)) {
      uri = `file://${uri}`
    }

    const nativeProps = Object.assign({}, this.props)
    Object.assign(nativeProps, {
      src: {
        uri
      }
    })

    return (
        <WinGifNative
          style={{width: 400, height: 400}}
          onGifFail={() => window.alert('HAI')}
          {...nativeProps}
        />
    )
  }
}

var WinGifNative = requireNativeComponent('WinGif', WinGif)