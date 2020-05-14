import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PrescriptionsActions } from '../../store/reducers/prescriptions';
import { Creators as PresentationActions } from '../../store/reducers/presentation';
import ContainerView from '../../components/ContainerView';
import Header from '../../components/Header';
import ListPrescriptions from './ListPrescriptions';
import { ModalInfo } from '../../components/Modal';

function Prescription(props) {
  const {
    listPrescriptionsRequest,
    prescriptions,
    clearErrorPrescriptions,
  } = props;

  useEffect(() => {
    listPrescriptionsRequest();
  }, []);

  return (
    <ContainerView>
      <Header menu bg="#4DDBBC" title="Prescrição" txtColor="#FFF" />
      <ListPrescriptions {...props} />
      <ModalInfo {...prescriptions} closeModal={clearErrorPrescriptions} />
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  prescriptions: state.prescriptions,
  presentation: state.presentation,
});

const allActions = { ...PrescriptionsActions, ...PresentationActions };

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(allActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Prescription);
