import React, { useState } from 'react';
import { IconFA5 } from '../../assets/icon';
import Text from '../Text';
import {
  ContainerPicker,
  ContainerPickerOpen,
  ButtonPicker,
  Container,
} from './styles';

export default function Picker(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const { dataPicker, title, error, callback } = props;

  function handlePressed() {
    setOpen(!open);
  }

  function handlePressedSelected(item) {
    setSelected(item);
    setOpen(false);
    callback(item);
  }

  return (
    <Container>
      <ContainerPicker
        borderColor={error ? '#c92421' : '#4ddbbc'}
        onPress={handlePressed}>
        <Text fontSize={'15px'}>{selected ? selected : title}</Text>
        <IconFA5 name={open ? 'chevron-up' : 'chevron-down'} size={16} />
      </ContainerPicker>
      {error && (
        <Text numberOfLines={1} color="#c92421">
          {error}
        </Text>
      )}
      {open && (
        <ContainerPickerOpen
          error={error}
          borderColor={error ? '#c92421' : '#4ddbbc'}
          data={dataPicker}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <ButtonPicker onPress={() => handlePressedSelected(item)}>
              <Text fontSize={'15px'}>{item}</Text>
            </ButtonPicker>
          )}
        />
      )}
    </Container>
  );
}
