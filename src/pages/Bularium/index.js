import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PresentationActions } from '../../store/reducers/presentation';
import ContainerView from '../../components/ContainerView';
import Header from '../../components/Header';

function Bularium() {
  return (
    <ContainerView>
      <Header menu bg="#4DDBBC" title="Bulário" txtColor="#FFF" />
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  presentation: state.presentation,
});

const allActions = { ...PresentationActions };

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(allActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Bularium);
