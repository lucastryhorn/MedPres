import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Animated, Dimensions } from 'react-native';
import { Creators as PresentationActions } from '../../store/reducers/presentation';
import { Creators as MyPharmacyActions } from '../../store/reducers/myPharmacy';
import ContainerView from '../../components/ContainerView';
import { ContainerMyPharma } from './styles';
import { ModalInfo } from '../../components/Modal';
import Header from '../../components/Header';
import CardMedicament from './CardMedicament';
import FloatingButton from './FloatingButton';
import ListMyPharmacy from './ListMyPharmacy';

const { height } = Dimensions.get('window');

function MyPharma(props) {
  const { listMyPharmacyRequest, presentation, myPharmacy } = props;

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  useEffect(() => {
    listMyPharmacyRequest();
  }, []);

  return (
    <ContainerView>
      <Header
        menu
        bg="#4DDBBC"
        title="Minha Cesta de Remédios"
        txtColor="#FFF"
      />
      <ContainerMyPharma>
        <ListMyPharmacy {...myPharmacy} state={state} setState={setState} />
        <CardMedicament {...props} state={state} setState={setState} />
      </ContainerMyPharma>
      <FloatingButton state={state} setState={setState} />
      <ModalInfo {...myPharmacy} />
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  presentation: state.presentation,
  myPharmacy: state.myPharmacy,
});

const allActions = { ...PresentationActions, ...MyPharmacyActions };

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(allActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyPharma);
