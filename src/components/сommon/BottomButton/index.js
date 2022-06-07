import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from '../Icon';

import styles from './styles';

const BottomButton = ({title, onPress, disabled}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[styles.background, styles.shadow, {paddingBottom: insets.bottom}]}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        disabled={disabled}
        style={[styles.wrapper, styles.shadow, {bottom: insets.bottom}]}
      >
        <Icon name="add" size={38} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
