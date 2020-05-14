import styled from 'styled-components';

export const ContainerFlatList = styled.FlatList`
  margin: 20px;
`;

export const ContainerTextInput = styled.View`
  margin-horizontal: 20px;
  margin-bottom: -3px;
`;

export const ContainerCard = styled.View`
  padding: 20px;
  background-color: white;
  height: 250px;
  elevation: 1;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;
