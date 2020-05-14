import React from 'react';
import { Modal, View, TextInput, TouchableOpacity } from 'react-native';
import { AutoCompleteInput } from '../../../components/AutoCompleteIntput';
import Text from '../../../components/Text';
import { TextInput as TextInputStyled } from '../../../components/TextInput';
import { IconFA5 } from '../../../assets/icon';
import Button from '../../../components/Button';

export default function CardMedicament(props) {
  const { state, setState } = props;

  const dataPicker = [
    { type: 'Cheio', color: 'green' },
    { type: 'Metade', color: 'orange' },
    { type: 'Acabando', color: 'red' },
  ];

  if (!state.openModalMedicament) {
    return null;
  }

  return (
    <Modal
      onRequestClose={() => setState({ ...state, openModalMedicament: false })}>
      <View style={{ padding: 10, backgroundColor: '#f4f9ff', flex: 1 }}>
        <AutoCompleteInput state={state} setState={setState} {...props} />
        {state?.selected?.full_name && (
          <View style={{ marginVertical: 10 }}>
            <Text>{state.selected.full_name}</Text>
          </View>
        )}
        <View>
          <View
            style={{
              borderWidth: 1,
              width: 170,
              height: state.openPicker ? 50 * dataPicker.length : 50,
              marginTop: 13,
              marginBottom: 3,
              borderRadius: 5,
              position: 'absolute',
              justifyContent: state.openPicker ? 'flex-start' : 'center',
              paddingHorizontal: 5,
              backgroundColor: '#f4f9ff',
              zIndex: 1,
              borderColor: '#4DDBBC',
            }}>
            <TouchableOpacity
              onPress={() =>
                setState({ ...state, openPicker: !state.openPicker })
              }
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 50,
              }}>
              {!state.selectedPicker ? (
                <Text fontSize={16}>Quantidade</Text>
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconFA5
                    color={state.selectedPicker.color}
                    style={{ marginRight: 7 }}
                    solid
                    name="circle"
                  />
                  <Text fontSize={16}>{state.selectedPicker.type}</Text>
                </View>
              )}
              <IconFA5
                name={state.openPicker ? 'chevron-up' : 'chevron-down'}
              />
            </TouchableOpacity>
            {state.openPicker &&
              dataPicker.map((item) => (
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() =>
                    setState({
                      ...state,
                      selectedPicker: item,
                      openPicker: false,
                    })
                  }>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconFA5
                      color={item.color}
                      style={{ marginRight: 7 }}
                      solid
                      name="circle"
                    />
                    <Text fontSize={16}>{item.type}</Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
          <View
            style={{ alignSelf: 'flex-end', position: 'absolute', width: 170 }}>
            <TextInputStyled placeholder="Data de Vencimento" />
          </View>
        </View>
        <View style={{ marginTop: 80 }}>
          <TextInput
            style={{
              padding: 5,
              borderWidth: 1,
              height: 200,
              borderColor: '#4DDBBC',
              borderRadius: 5,
            }}
            placeholder="Observação"
            placeholderTextColor="#304351"
            multiline={true}
          />
        </View>
        <View style={{ marginTop: 40, width: 80, alignSelf: 'center' }}>
          <Button backgroundColor="#0358FF">
            <Text fontSize={16} color="white">
              Salvar
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
}
