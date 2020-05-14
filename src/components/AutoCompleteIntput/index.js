import React, { useEffect } from 'react';
import { TextInput } from '../TextInput';
import { FlatList } from 'react-native';
import Text from '../Text';
import { ContainerView, ContainerTextInput, ContainerButton } from './styles';
import NotFoundSearch from './NotFoundSearch';
import { searchFn } from '../../utils/searchFn';
import { ModalInfo } from '../Modal';

export function AutoCompleteInput(props) {
  const { state, setState, presentationRequest, presentation } = props;

  useEffect(() => {
    presentationRequest();
  }, []);

  const newData =
    state.search &&
    searchFn(presentation.list, state.search, { presentation: 'full_name' });

  function renderList() {
    if (state?.search?.length) {
      return (
        <ContainerView>
          <FlatList
            data={newData}
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={<NotFoundSearch />}
            renderItem={({ item }) => (
              <ContainerButton
                onPress={() =>
                  setState({ ...state, selected: item, search: '' })
                }>
                <Text>{item.full_name}</Text>
              </ContainerButton>
            )}
          />
        </ContainerView>
      );
    }
    return null;
  }

  return (
    <>
      <ContainerTextInput>
        <TextInput
          placeholder="Buscar Medicamento"
          onChangeText={(text) => setState({ ...state, search: text })}
          value={state.search}
          autoCapitalize="characters"
        />
      </ContainerTextInput>
      {renderList()}
      <ModalInfo {...presentation} />
    </>
  );
}
