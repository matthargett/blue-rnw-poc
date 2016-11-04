import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textSection: {
    padding: Metrics.baseMargin,
    marginTop: Metrics.doubleBaseMargin
  },
  controlsSection: {
    flex: 1,
    padding: Metrics.doubleBaseMargin,
    alignItems: 'flex-end',
  },
  updateText: {
    paddingHorizontal: Metrics.baseMargin,
    color: Colors.agua
  },
  attendeesButton: {
    backgroundColor: Colors.charCoal,
    justifyContent: 'center',
    borderRadius: Metrics.buttonRadius,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  attendeesText: {
    color: Colors.snow,
    textAlign: 'center',
    ...Fonts.style.h3
  }
})