import React from 'react';
import { View } from 'react-native';
import Text from '../../Text';
import { IconFA5 } from '../../../assets/icon';

export default function NotFoundSearch() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text fontSize={24}>Sem Resultados!</Text>
      <IconFA5 size={24} color="#c92421" name="exclamation-circle" />
    </View>
  );
}
