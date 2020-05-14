import React, { useEffect } from 'react';
import {
  Modal,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Text from '../../../components/Text';
import { IconFA5 } from '../../../assets/icon';
import { maskCPF } from '../../../utils/formatCPF';
import {
  ContainerFooter,
  ContainerBody,
  ContainerModal,
  ContainerButton,
} from './styles';
import { ModalInfo } from '../../../components/Modal';

export default function ModalFullPrescription(props) {
  const {
    item,
    closeModal,
    presentation,
    clearErrorPresentation,
    presentationCompleteRequest,
  } = props;

  useEffect(() => {
    if (presentation?.selectedItem?.medicine_id?.bula_pacient) {
      Linking.openURL(`${presentation.selectedItem.medicine_id.bula_pacient}`);
    }
  }, [presentation?.selectedItem?.medicine_id?.bula_pacient]);

  if (Object.entries(item).length) {
    return (
      <>
        <StatusBar hidden={true} />
        <Modal onRequestClose={closeModal}>
          <ScrollView>
            <ContainerModal>
              <TouchableOpacity onPress={closeModal}>
                <IconFA5 name="arrow-left" size={20} />
              </TouchableOpacity>
              <ContainerBody>
                <Text fontWeight="bold" fontSize={22}>
                  {item?.medic?.name}
                </Text>
                <Text fontSize={16}>{item?.medic?.crm}</Text>
                <Text fontSize={16}>{maskCPF(item?.medic?.cpf)}</Text>
              </ContainerBody>
              {item.prescription_medicine.map((medicine) => (
                <ContainerBody key={String(medicine.id)}>
                  <Text fontWeight="bold" fontSize={16}>
                    {medicine?.presentation_name}
                  </Text>
                  <Text fontSize={16}>
                    Dosagem:{' '}
                    <Text fontWeight="bold" fontSize={16}>
                      {medicine?.dosage_formated} {medicine?.dosage_name}
                    </Text>
                  </Text>
                  <Text fontSize={16}>
                    Frequencia do Remedio:{' '}
                    <Text fontWeight="bold" fontSize={16}>
                      {medicine?.frequency} vezes a cada{' '}
                      {medicine?.frequency_name}
                    </Text>
                  </Text>
                  <Text fontSize={16}>
                    Admistração:{' '}
                    <Text fontWeight="bold" fontSize={16}>
                      {medicine?.administration_name}
                    </Text>
                  </Text>
                  <Text fontSize={16}>
                    Dia(s) de Tratamento:{' '}
                    <Text fontWeight="bold" fontSize={16}>
                      {medicine?.days_treatment}
                    </Text>
                  </Text>
                  <Text fontSize={16}>
                    Recomendação:{' '}
                    <Text fontWeight="bold" fontSize={16}>
                      {medicine?.recommendation_medicine}
                    </Text>
                  </Text>
                  <ContainerButton
                    onPress={() =>
                      presentationCompleteRequest(medicine.presentation, true)
                    }>
                    <Text fontSize={16} color="#0358FF">
                      Bula
                    </Text>
                    <IconFA5 color="#0358FF" name="arrow-right" />
                  </ContainerButton>
                </ContainerBody>
              ))}
              <ContainerFooter>
                <Text fontWeight="bold" fontSize={16}>
                  Recomendação da Receita:
                </Text>
                <Text fontWeight="bold" fontSize={14}>
                  {item?.recommendation}
                </Text>
              </ContainerFooter>
            </ContainerModal>
          </ScrollView>
        </Modal>
        <ModalInfo {...presentation} closeModal={clearErrorPresentation} />
      </>
    );
  }
  return null;
}
