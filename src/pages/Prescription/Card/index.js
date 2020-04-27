import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '../../../components/Text';
import { IconFA5 } from '../../../assets/icon';
import {
  ContainerFlatList,
  ContainerCard,
  ContainerTitle,
  ContainerButton,
  ContainerTextInput,
} from './styles';
import { TextInput } from '../../../components/TextInput';
import ModalFullPrescription from '../ModalFullPrescription';
import Refresh from '../../../components/Refresh';

export default function Card(props) {
  const { listPrescriptionsRequest } = props;
  const { data, loading } = props.prescriptions;
  const [selected, setSelected] = useState({});

  function _renderItem({ item }) {
    return (
      <ContainerCard>
        <ContainerTitle>
          <View>
            <Text fontSize={18} fontWeight="bold">
              {item?.medic?.name}
            </Text>
            <Text>{item?.medic?.crm}</Text>
          </View>
          <View>
            <Text>{item?.data}</Text>
          </View>
        </ContainerTitle>
        <View>
          <Text fontSize={16} fontWeight="semiBold">
            {item?.prescription_medicine[0]?.presentation_name}
          </Text>
          <Text fontSize={16}>
            {`Uso: ${item?.prescription_medicine[0]?.administration_name}`}
          </Text>
        </View>
        <ContainerButton onPress={() => setSelected(item)}>
          <Text color="#0358FF" fontSize={16}>
            Prescrição Completa
          </Text>
          <IconFA5 color="#0358FF" size={16} name="arrow-right" />
        </ContainerButton>
      </ContainerCard>
    );
  }

  return (
    <>
      <ContainerTextInput>
        <TextInput placeholder="Buscar" icon="search" />
      </ContainerTextInput>
      <ContainerFlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <Refresh onRefresh={listPrescriptionsRequest} loading={loading} />
        }
      />
      <ModalFullPrescription
        {...props}
        item={selected}
        closeModal={() => setSelected({})}
      />
    </>
  );
}
