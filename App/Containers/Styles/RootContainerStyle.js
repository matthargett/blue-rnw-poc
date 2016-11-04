import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textSection: {
    padding: Metrics.baseMargin,
    marginTop: Metrics.doubleBaseMargin
  },
  updateText: {
    paddingHorizontal: Metrics.baseMargin,
    color: Colors.agua
  }
})