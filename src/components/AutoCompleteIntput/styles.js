import styled from 'styled-components';
import { Animated } from 'react-native';

export const ContainerTextInput = styled.View`
  elevation: 2;
`;

export const ContainerView = styled(Animated.View)`
  height: 200;
  background-color: white;
  elevation: 1;
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
  position: absolute;
  top: 72;
  width: 98%;
  align-self: center;
  border-bottom-width: 1;
  border-right-width: 1;
  border-left-width: 1;
  border-color: #4ddbbc;
`;

export const ContainerViewFlatList = styled.View`
  padding: 15px;
  border-bottom-width: 0.3;
  border-color: #ccc;
`;
