import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../../constants/styling';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.backgroundGray,
    flex: 1,
  },
  linearGradient: {},
  gradientBottom: {},
  logo: {
    height: 26,
    width: 22,
  },
  logoWrapper: {
    paddingLeft: SPACING.MD,
    position: 'absolute',
  },
  flatList: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
