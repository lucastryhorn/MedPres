import styled from 'styled-components';

export const Container = styled.View`
  width: 40%;
`;

export const ContainerPicker = styled.TouchableOpacity`
  align-items: center;
  border-width: 1;
  margin-bottom: 3;
  margin-top: 8;
  border-color: ${(props) => (props.error ? '#c92421' : '#4ddbbc')};
  border-radius: 5;
`;

export const ContainerPickerItem = styled.Picker`
  height: 50;
  width: 100%;
`;
