import {StyleSheet} from 'react-native';
import {SPACING} from '../../../constants/styling';

export default StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  actionWrapper: {
    marginTop: SPACING.LG,
    marginRight: SPACING.LG,
  },
  cardWrapper: {
    top: 308,
    flex: 1,
  },
});
