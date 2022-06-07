import React, {useMemo} from 'react';
import {Modal, Share, TouchableOpacity, View, Alert} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import Card from '../Card';
import ButtonAction from '../ButtonAction';

import styles from './styles';

const ModalAction = ({card, visible, setVisible}) => {
  const actions = useMemo(
    () => [
      {
        title: 'Share',
        icon: 'share',
        onPress: async () =>
          Share.share({
            message: card.title,
            url: 'https://cards.foodstyles.com/z0fc9mf48zfF',
          }),
      },
      {
        title: 'Duplicate',
        icon: 'duplicate',
      },

      {
        title: 'Delete',
        icon: 'remove',
        onPress: () =>
          Alert.alert(
            'Confirm delete',
            `This will delete the Food Style and all its settings?`,
            [
              {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {},
              },
              {text: 'Cancel'},
            ],
          ),
      },
    ],
    [card.title],
  );

  return (
    <Modal animationType={'fade'} transparent={true} visible={visible}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setVisible(false)}
          style={styles.absolute}
        >
          <View style={styles.cardWrapper}>
            <Card
              title={card.title}
              opened={true}
              onPress={() => setVisible(false)}
            />
            <View style={styles.actionWrapper}>
              {actions.map(item => (
                <ButtonAction
                  icon={item.icon}
                  title={item.title}
                  onPress={item.onPress}
                />
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </BlurView>
    </Modal>
  );
};

export default ModalAction;
