import React from 'react';
import { View } from 'react-native';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import { IconFA5 } from '../../../../assets/icon';

export default function EmptyList(props) {
  const { state, setState } = props;

  console.log('>>>>>>>>>', props);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <IconFA5 size={24} color="#c92421" name="shopping-basket" />
      <Text fontSize={18} fontWeight="bold">
        Cesta vazia!
      </Text>
      <View style={{ width: 150 }}>
        <Button
          onPress={() => setState({ ...state, openModalMedicament: true })}
          backgroundColor={'#0358FF'}>
          <Text color="white" fontSize={16}>
            Adicionar
          </Text>
        </Button>
      </View>
    </View>
  );
}
