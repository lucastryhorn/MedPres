import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PrescriptionsActions } from '../../store/reducers/prescriptions';
import ContainerView from '../../components/ContainerView';
import Header from '../../components/Header';
import Card from './Card';

function Prescription(props) {
  const { listPrescriptionsRequest } = props;

  useEffect(() => {
    listPrescriptionsRequest();
  }, []);

  return (
    <ContainerView>
      <Header menu bg="#4DDBBC" title="Prescrição" txtColor="#FFF" />
      <Card {...props.prescriptions} />
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  prescriptions: state.prescriptions,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PrescriptionsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Prescription);
