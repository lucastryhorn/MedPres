import styled from 'styled-components';

export const ContainerTextInput = styled.View`
  elevation: 2;
`;

export const ContainerView = styled.View`
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
  z-index: 10;
`;

export const ContainerButton = styled.TouchableOpacity`
  padding: 15px;
  border-bottom-width: 0.3;
  border-color: #ccc;
`;
