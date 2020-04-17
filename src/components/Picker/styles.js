import styled from 'styled-components';

export const Container = styled.View`
  width: 40%;
  margin-top: 8px;
  margin-bottom: 3px;
`;

export const ContainerPicker = styled.TouchableOpacity`
  border-width: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50;
  border-radius: 5;
  padding-horizontal: 8;
  border-color: ${(props) => props.borderColor}
  margin-vertical: 5;
`;

export const ContainerPickerOpen = styled.FlatList`
  z-index: 1;
  position: absolute;
  bottom: ${(props) => (props.error ? '-120%' : '-190%')} ;
  left: 0;
  right: 0;
  background-color: #f4f9ff;
  border-left-width: 1;
  border-right-width: 1;
  border-bottom-width: 1;
  border-color: ${(props) => props.borderColor}
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
`;

export const ButtonPicker = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
`;
