import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RegisterActions } from '../../store/reducers/register';
import ContainerView from '../../components/ContainerView';
import Form from './Form';
import Header from '../../components/Header';
import { ContainerRegister, ImageLogo } from './styles';
import { logoMedPres } from '../../assets/images';
import { ModalInfo } from '../../components/Modal';

function Register(props) {
  const { register, clearRegister, navigation } = props;
  console.log(register);
  function handlePressedButtonModal() {
    if (register.success) {
      navigation.goBack();
      return clearRegister();
    }
    clearRegister();
  }

  return (
    <ContainerView>
      <Header />
      <ContainerRegister
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Form {...props} />
      </ContainerRegister>
      <ImageLogo resizeMode="contain" source={logoMedPres} />
      <ModalInfo {...register} closeModal={handlePressedButtonModal} />
    </ContainerView>
  );
}

const mapStateToProps = (state) => ({
  register: state.register,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(RegisterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
