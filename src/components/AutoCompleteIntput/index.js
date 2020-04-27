import React, { useState } from 'react';
import { TextInput } from '../TextInput';
import { FlatList } from 'react-native';
import Text from '../Text';
import {
  ContainerView,
  ContainerTextInput,
  ContainerViewFlatList,
} from './styles';

export function AutoCompleteInput() {
  const [test, setTest] = useState('');
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <ContainerTextInput>
        <TextInput placeholder="Buscar" />
      </ContainerTextInput>
      <ContainerView>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <ContainerViewFlatList>
              <Text>{item}</Text>
            </ContainerViewFlatList>
          )}
        />
      </ContainerView>
    </>
  );
}
