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
    flexDirection: 'row',
    borderRadius: Metrics.buttonRadius,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.baseMargin
  },
  attendeesText: {
    color: Colors.snow,
    textAlign: 'center',
    ...Fonts.style.h3,
    margin: Metrics.baseMargin
  },
  user: {
    width: Metrics.images.medium,
    height: Metrics.images.medium,
    marginVertical: Metrics.baseMargin
  },
  chat: {
    width: Metrics.images.normal,
    height: Metrics.images.normal,
    padding: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin
  },
  settings: {
    width: Metrics.images.normal,
    height: Metrics.images.normal,
    marginHorizontal: Metrics.baseMargin
  },
  videoBox: {
    width: Metrics.images.huge,
    height: Metrics.images.huge,
    margin: Metrics.baseMargin
  }

})