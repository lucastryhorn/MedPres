import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import EmptyList from './EmptyList';
import Text from '../../../components/Text';
import { IconFA5 } from '../../../assets/icon';

export default function ListMyPharmacy(props) {
  const { data } = props;

  function _renderItem({ item }) {
    console.log(item);

    const color = {
      Cheio: 'green',
      Metade: 'orange',
      Acabando: 'red',
    };

    return (
      <View style={{ backgroundColor: 'white', padding: 20, elevation: 1 }}>
        <Text fontWeight="bold" fontSize={16}>
          {item.presentation_name}
        </Text>
        <Text fontSize={16}>
          Quantidade:{' '}
          <IconFA5 color={color[item.quantity]} solid name="circle" />{' '}
          <Text fontWeight="bold" fontSize={16}>
            {item.quantity}
          </Text>
        </Text>
        <Text fontSize={16}>
          Data de validade:{' '}
          <Text fontWeight="bold" fontSize={16}>
            {item.expiration}
          </Text>
        </Text>
        <Text fontSize={16}>
          Observação:{' '}
          <Text fontWeight="bold" fontSize={16}>
            {item.observation ? item.observation : 'Nenhuma'}
          </Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconFA5 solid color="#0358FF" size={18} name="edit" />
            <Text color="#0358FF">Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconFA5 color="#c92421" size={18} name="trash" />
            <Text color="#c92421">Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <FlatList
      data={data[0]?.my_medicine}
      ListEmptyComponent={<EmptyList {...props} />}
      contentContainerStyle={{ flex: 1 }}
      keyExtractor={(item) => String(item.id)}
      renderItem={_renderItem}
    />
  );
}
