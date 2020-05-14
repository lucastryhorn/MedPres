import React, { useEffect } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';
import Text from '../../../components/Text';
import { TextInput } from '../../../components/TextInput';
import Button from '../../../components/Button';

const { height } = Dimensions.get('window');

export default function LinkMyPharmacy(props) {
  const { state, setState } = props;

  useEffect(() => {
    if (state.openModalLink) {
      openModal();
    } else {
      closeModal();
    }
  }, [state.openModalLink]);

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}>
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{ translateY: state.modal }],
          },
        ]}>
        <View style={styles.indicator} />
        <TextInput placeholder="Código" />
        <View style={{ width: 200, alignSelf: 'center' }}>
          <Button backgroundColor="#0358FF">
            <Text color="white">Linkar</Text>
          </Button>
          <Button
            onPress={() => setState({ ...state, openModalLink: false })}
            backgroundColor="#c92421">
            <Text>Fechar</Text>
          </Button>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '50%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
});
