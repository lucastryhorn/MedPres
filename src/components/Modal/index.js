import React, { useState, useEffect } from 'react';
import { Modal, Animated, Easing } from 'react-native';
import Text from '../Text';
import { IconFA5 } from '../../assets/icon';
import {
  ViewModal,
  Card,
  Trip,
  Body,
  IconView,
  Message,
  ViewButtons,
  AnimatedImage,
  CardLoading,
  ImageLogo,
  Button,
} from './styles';
import { logoMedPres, iconLogo } from '../../assets/images';

export function ModalInfo(props) {
  const [springValue] = useState(new Animated.Value(0));
  const [spinnerValue] = useState(new Animated.Value(0));
  const {
    title,
    loading,
    error,
    warning,
    info,
    success,
    firstButton,
    secondButton,
  } = props;

  const message = error || success || warning || info;

  useEffect(() => {
    springAnimation();
  }, []);

  const spin = spinnerValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  function springAnimation() {
    springValue.setValue(0);
    spinnerValue.setValue(0);
    Animated.sequence([
      Animated.spring(springValue, {
        toValue: 2,
        friction: 0.5,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(spinnerValue, {
          toValue: 2,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => springAnimation());
  }

  function renderIcon() {
    if (success) {
      return 'check';
    }

    if (error) {
      return 'times';
    }

    if (info) {
      return 'info';
    }

    if (warning) {
      return 'question';
    }

    return '';
  }

  function renderTitle() {
    if (error) {
      return 'OSH...';
    }

    if (success) {
      return 'Sucesso!';
    }

    if (warning) {
      return 'Cuidado!';
    }

    if (info) {
      return 'Aviso!';
    }

    return title;
  }

  function renderButtons() {
    if (error) {
      return (
        <>
          <Button onPress={firstButton} marginRight={'20px'}>
            <Text fontWeight="semiBold" fontSize={'18px'} color="#9d9daa">
              Tentar de Novo
            </Text>
          </Button>
          <Button onPress={secondButton}>
            <Text fontWeight="semiBold" fontSize={'18px'} color="#9d9daa">
              Cancelar
            </Text>
          </Button>
        </>
      );
    }
  }

  function renderBody() {
    if (loading) {
      return (
        <CardLoading>
          <ImageLogo resizeMode="contain" source={logoMedPres} />
          <AnimatedImage
            resizeMode="contain"
            style={{
              transform: [{ scale: springValue }, { rotate: spin }],
            }}
            source={iconLogo}
          />
          <Text fontSize={'18px'}>Aguarde...</Text>
        </CardLoading>
      );
    }
    return (
      <>
        <Trip backgroundColor={renderIcon()} />
        <Body>
          <Text fontWeight="semiBold" color="#9d9daa" fontSize={'30px'}>
            {renderTitle()}
          </Text>
          <Message fontSize={'18px'}>{message}</Message>
          <ViewButtons>{renderButtons()}</ViewButtons>
          <IconView>
            <IconFA5 color="#fafaff" size={200} name={renderIcon()} />
          </IconView>
        </Body>
      </>
    );
  }

  if (loading || error) {
    return (
      <Modal animationType="fade" transparent={true}>
        <ViewModal>
          <Card>{renderBody()}</Card>
        </ViewModal>
      </Modal>
    );
  }

  return null;
}
