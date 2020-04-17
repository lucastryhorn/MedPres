import React from 'react';
import { ContainerImage, LogoImage } from '../styles';
import { logoMedPres } from '../../../assets/images';

export function Header() {
  return (
    <ContainerImage>
      <LogoImage resizeMode="contain" source={logoMedPres} />
    </ContainerImage>
  );
}
