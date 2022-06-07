import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../../constants/styling';

export default StyleSheet.create({
  background: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  wrapper: {
    height: 52,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    flexDirection: 'row',
    paddingHorizontal: SPACING.MD,
    marginHorizontal: SPACING.MD,
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 38,
    textAlignVertical: 'center',
  },
  shadow: {
    shadowColor: COLORS.shadowGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,

    elevation: 6,
  },
  icon: {
    marginTop: SPACING.XXS,
    marginRight: SPACING.XS,
  },
});
