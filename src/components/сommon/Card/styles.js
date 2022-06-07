import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../../constants/styling';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: 52,
    marginHorizontal: SPACING.MD,
    paddingHorizontal: SPACING.MD,
    paddingVertical: SPACING.S,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginBottom: SPACING.XS,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: COLORS.shadowGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,

    elevation: 6,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    marginRight: SPACING.S,
    flex: 1,
  },
  iconWrapper: {
    alignSelf: 'flex-start',
  },
});
