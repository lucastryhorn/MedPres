import React from 'react';
import ContainerView from '../../components/ContainerView';
import Text from '../../components/Text';
import { AutoCompleteInput } from '../../components/AutoCompleteIntput';
import { ContainerMyPharma } from './styles';
import { View } from 'react-native';

export default function MyPharma() {
  return (
    <ContainerView>
      <ContainerMyPharma>
        <AutoCompleteInput />
        <View style={{ backgroundColor: 'black', height: 200 }}></View>
      </ContainerMyPharma>
    </ContainerView>
  );
}
