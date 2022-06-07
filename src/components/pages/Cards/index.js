import React, {useMemo} from 'react';
import {View, useWindowDimensions, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import BottomButton from '../../сommon/BottomButton';
import Card from '../../сommon/Card';
import Icon from '../../сommon/Icon';

import {COLORS} from '../../../constants/styling';

import styles from './styles';

const Cards = () => {
  const cards = useSelector(({cards}) => cards.cards);
  const {height} = useWindowDimensions();
  const gradientHeight = useMemo(() => height / 4.5, [height]);
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={styles.wrapper}>
        <LinearGradient
          colors={[COLORS.orange, COLORS.yellow]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.linearGradient, {height: gradientHeight}]}
        >
          <View style={[styles.logoWrapper, {top: insets.top}]}>
            <Icon name="logo" size={22} style={styles.logo} />
          </View>
          <LinearGradient
            colors={[
              COLORS.transparent,
              COLORS.whiteLight,
              COLORS.whiteMiddle,
              COLORS.backgroundGray,
            ]}
            locations={[0, 0.26, 0.83, 1]}
            style={[
              styles.gradientBottom,
              {height: gradientHeight / 2, top: gradientHeight / 2},
            ]}
          ></LinearGradient>
        </LinearGradient>

        <FlatList
          data={cards}
          renderItem={({item, index}) => (
            <Card title={item.title} index={index} />
          )}
          style={[styles.flatList, {top: insets.top + 67}]}
        />
        <BottomButton title="New Food Style" />
      </View>
    </>
  );
};

export default Cards;
