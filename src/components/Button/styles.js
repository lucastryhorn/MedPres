import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-vertical: 5px;
  border-radius: 5px;
`;
