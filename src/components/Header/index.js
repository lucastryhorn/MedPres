import React from 'react';
import { IconFA5 } from '../../assets/icon';
import { ContainerHeader, ButtonBack } from './styles';
import Text from '../Text';
import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
  const { title, menu, bg, txtColor } = props;
  const navigation = useNavigation();

  function handlerPressedIconBack() {
    navigation.goBack();
  }

  function handlerPressedIconMenu() {
    navigation.openDrawer();
  }

  return (
    <ContainerHeader bg={bg}>
      <ButtonBack
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={menu ? handlerPressedIconMenu : handlerPressedIconBack}>
        {menu ? (
          <IconFA5 name="bars" color="#FFF" size={19} />
        ) : (
          <IconFA5 name="arrow-left" size={19} />
        )}
      </ButtonBack>
      <Text fontSize={'20px'} color={txtColor}>
        {title}
      </Text>
    </ContainerHeader>
  );
}
