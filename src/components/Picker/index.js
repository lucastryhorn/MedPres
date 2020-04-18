import React, { useState } from 'react';
import Text from '../Text';
import { ContainerPicker, ContainerPickerItem, Container } from './styles';
import { Picker } from 'react-native';

export default function PickerModal(props) {
  const [selected, setSelected] = useState('');
  const { dataPicker, error, callback } = props;

  function handlePressedSelected(item, index) {
    if (index === 0) {
      return;
    }
    setSelected(item);
    callback(item);
  }

  return (
    <Container>
      <ContainerPicker error={error}>
        <ContainerPickerItem
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) =>
            handlePressedSelected(itemValue, itemIndex)
          }>
          {dataPicker.map((item, index) => {
            return <Picker.Item key={item} label={item} value={item} />;
          })}
        </ContainerPickerItem>
      </ContainerPicker>
      {error && (
        <Text numberOfLines={1} color="#c92421">
          {error}
        </Text>
      )}
    </Container>
  );
}
