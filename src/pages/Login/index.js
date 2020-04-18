import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/reducers/auth';
import ContainerView from '../../components/ContainerView';
import { ContainerLogin } from './styles';
import { Header } from './Header';
import Form from './Form';
import { ModalInfo } from '../../components/Modal';

function Login(props) {
  const { navigation, auth } = props;

  useEffect(() => {
    if (auth.authenticated) {
      navigation.navigate('Home');
    }
  }, [auth.authenticated]);

  return (
    <ContainerView>
      <ContainerLogin>
        <Header />
        <Form {...props} />
      </ContainerLogin>
      <ModalInfo {...auth} closeModal={props.clearErrorAuth} />
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
