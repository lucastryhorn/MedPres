import React, { useEffect, useState } from 'react';
import ContainerView from '../../components/ContainerView';
import { Animated, Easing } from 'react-native';
import { logoMedPres, iconLogo } from '../../assets/images';
import { LogoAnimated, Logo, ContainerSplash } from './styles';

export default function SplashScreen() {
  const [springValue] = useState(new Animated.Value(0));
  const [spinnerValue] = useState(new Animated.Value(0));

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
  return (
    <ContainerView>
      <ContainerSplash>
        <Logo resizeMode={'contain'} source={logoMedPres} />
        <LogoAnimated
          resizeMode="contain"
          style={{
            transform: [{ scale: springValue }, { rotate: spin }],
          }}
          source={iconLogo}
        />
      </ContainerSplash>
    </ContainerView>
  );
}
