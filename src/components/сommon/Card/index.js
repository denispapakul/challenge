import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Icon from '../Icon';
import ModalAction from '../ModalAction';

import styles from './styles';

const Card = ({title}) => {
  const [optionsShow, setOptionsShow] = useState(false);

  return (
    <View>
      <View style={[styles.wrapper, styles.overlay]}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => setOptionsShow(true)}
        >
          <Icon name="options" size={24} />
        </TouchableOpacity>
      </View>
      <ModalAction
        visible={optionsShow}
        card={{title}}
        setVisible={setOptionsShow}
      />
    </View>
  );
};

export default Card;
