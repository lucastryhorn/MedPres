import styled from 'styled-components';
import { Animated } from 'react-native';

export const ContainerSplash = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 100px;
`;

export const LogoAnimated = styled(Animated.Image)`
  width: 30px;
  height: 30px;
`;
