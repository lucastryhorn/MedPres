import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { IconFA5 } from '../../../assets/icon';
import LinkMyPharmacy from '../LinkMyPharmacy';

export default function FloatingButton(props) {
  const { state, setState } = props;
  const [animation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);

  function toogleMenu() {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    setOpen(!open);
  }

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -80],
  });

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -80],
  });

  function openModalMedicament() {
    setState({ ...state, openModalMedicament: true });
    toogleMenu();
  }

  function openFooterModal() {
    setState({ ...state, openModalLink: true });
    toogleMenu();
  }

  function renderFloating() {
    if (!state.openModalLink) {
      return (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            bottom: 70,
            right: 70,
            justifyContent: 'center',
          }}>
          <Animated.View
            style={{
              height: 48,
              width: 48,
              borderRadius: 48 / 2,
              position: 'absolute',
              elevation: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              transform: [{ scale: animation }, { translateX }],
            }}>
            <TouchableOpacity onPress={openFooterModal}>
              <IconFA5 size={20} name="link" />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={{
              height: 48,
              width: 48,
              borderRadius: 48 / 2,
              position: 'absolute',
              elevation: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              transform: [{ scale: animation }, { translateY }],
            }}>
            <TouchableOpacity onPress={openModalMedicament}>
              <IconFA5 size={20} name="plus" />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={{
              height: 60,
              width: 60,
              borderRadius: 60 / 2,
              position: 'absolute',
              elevation: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={toogleMenu}>
              <IconFA5 size={24} name={open ? 'times' : 'cog'} />
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
    }
  }

  return (
    <>
      {renderFloating()}
      <LinkMyPharmacy state={state} setState={setState} />
    </>
  );
}
