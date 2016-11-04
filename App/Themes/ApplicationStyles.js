// @flow

import Colors from './Colors'
import Fonts from './Fonts'

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      marginTop: 10,
      backgroundColor: Colors.background
    },
    titleSection: {
      color: Colors.charCoal,
      fontFamily: Fonts.type.bold,
      textShadowColor: Colors.silver,
      textShadowOffset: { width: 4, height: 4 },
      textShadowRadius: 4,
      ...Fonts.style.h4,
    },
    horizontal: {
      flexDirection: 'row'
    }
  }
}

export default ApplicationStyles