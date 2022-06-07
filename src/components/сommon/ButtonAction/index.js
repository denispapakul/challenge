import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

const ButtonAction = ({icon, title, onPress}) => (
  <TouchableOpacity
    style={styles.wrapper}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <Text style={styles.title}>{title}</Text>
    <Icon name={icon} size={50} />
  </TouchableOpacity>
);

export default ButtonAction;
