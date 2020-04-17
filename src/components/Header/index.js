import React from 'react';
import { IconFA5 } from '../../assets/icon';
import { ContainerHeader, ButtonBack } from './styles';
import Text from '../Text';
import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
  const navigation = useNavigation();

  function handlerPressedIconBack() {
    navigation.goBack();
  }

  return (
    <ContainerHeader>
      <ButtonBack
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={handlerPressedIconBack}>
        <IconFA5 name="arrow-left" size={19} />
      </ButtonBack>
      <Text fontSize={'20px'}>Registro</Text>
    </ContainerHeader>
  );
}
