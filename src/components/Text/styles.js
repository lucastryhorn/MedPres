import styled from 'styled-components';

const font = {
  medium: 'GraphikMedium',
  light: 'GraphikLight',
};

const weight = {
  bold: 'bold',
  semiBold: 700,
};

export const Container = styled.Text`
  font-family: ${(props) =>
    props.fontFamily ? font[props.fontFamily] : 'GraphikRegular'};
  color: ${(props) => (props.color ? props.color : '#304351')};
  font-weight: ${(props) =>
    props.fontWeight ? weight[props.fontWeight] : 'normal'};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
`;
