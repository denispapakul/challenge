import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/styling';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  title: {
    lineHeight: 50,
    color: COLORS.green,
    fontFamily: 'ProximaNovaA-Semibold',
    fontSize: 15,
  },
});
