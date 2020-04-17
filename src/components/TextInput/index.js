import React, { useState, forwardRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import {
  ViewTextInput,
  ContainerTextInput,
  AnimatedView,
  AnimatedText,
  Container,
  ContainerTextInputMasked,
} from './styles';
import { IconFA5 } from '../../assets/icon';
import Text from '../Text';

export const TextInput = forwardRef((props, ref) => {
  const { icon, iconColor, error, placeholder, type } = props;
  const [fadeAnim] = useState(new Animated.Value(1));
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  function animate() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
    setShowPlaceholder(false);
  }

  function exitAnimate() {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
    setShowPlaceholder(true);
  }

  const opacity = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const translateY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  return (
    <Container>
      <ViewTextInput
        borderWidth={showPlaceholder ? 1 : 2.5}
        borderColor={error ? '#c92421' : '#4DDBBC'}>
        <AnimatedView style={{ opacity }}>
          <AnimatedText style={{ transform: [{ translateY }], opacity }}>
            {placeholder}
          </AnimatedText>
        </AnimatedView>
        {type ? (
          <ContainerTextInputMasked
            onFocus={() => animate()}
            onBlur={() => exitAnimate()}
            {...props}
            placeholder={showPlaceholder ? placeholder : ''}
            ref={ref}
          />
        ) : (
          <ContainerTextInput
            onFocus={() => animate()}
            onBlur={() => exitAnimate()}
            {...props}
            placeholder={showPlaceholder ? placeholder : ''}
            ref={ref}
          />
        )}
        {icon && (
          <TouchableOpacity {...props}>
            <IconFA5 color={iconColor} name={icon} size={18} />
          </TouchableOpacity>
        )}
      </ViewTextInput>
      {error && (
        <Text numberOfLines={1} color="#c92421">
          {error}
        </Text>
      )}
    </Container>
  );
});
