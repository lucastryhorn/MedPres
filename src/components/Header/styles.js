import styled from 'styled-components';

export const ContainerHeader = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
`;

export const ButtonBack = styled.TouchableHighlight`
  margin-horizontal: 10px;
  align-items: center;
  justify-content: center;
  height: 40px
  width: 40px
  border-radius: 25px;
`;
