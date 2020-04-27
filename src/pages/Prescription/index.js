import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PrescriptionsActions } from '../../store/reducers/prescriptions';
import { Creators as ApresentationActions } from '../../store/reducers/apresentation';
import ContainerView from '../../components/ContainerView';
import Header from '../../components/Header';
import Card from './Card';
import { ModalInfo } from '../../components/Modal';

function Prescription(props) {
  const { listPrescriptionsRequest, prescriptions } = props;

  useEffect(() => {
    listPrescriptionsRequest();
  }, []);

  return (
    <ContainerView>
      <Header menu bg="#4DDBBC" title="Prescrição" txtColor="#FFF" />
      <Card {...props} />
      <ModalInfo {...prescriptions} />
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  prescriptions: state.prescriptions,
});

const allActions = { ...PrescriptionsActions, ...ApresentationActions };

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(allActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Prescription);
