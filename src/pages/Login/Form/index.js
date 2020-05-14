import React, { createRef, useState } from 'react';
import {
  ContainerTextInputs,
  ContainerForgetPassword,
  ContainerButtons,
} from '../styles';
import Text from '../../../components/Text';
import { TextInput } from '../../../components/TextInput';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { formatCPF } from '../../../utils/formatCPF';
import { validate, schema, refCPF } from './validation';

export default function Form(props) {
  const [state, setState] = useState({ cpf: '', password: '' });
  const { loginUserRequest } = props;

  const refPassword = createRef();
  const navigation = useNavigation();

  function handleChangeText(name, value) {
    setState({ ...state, [name]: value, error: {} });
  }

  function handleSubmit() {
    const { password } = state;

    const validationMessages = validate(state, schema);

    if (Object.entries(validationMessages).length) {
      return setState({ ...state, error: validationMessages });
    }

    loginUserRequest({ cpf: formatCPF(refCPF.current), password });
  }

  return (
    <ContainerTextInputs>
      <TextInput
        placeholder="CPF"
        onChangeText={(text) => handleChangeText('cpf', text)}
        value={state.cpf}
        type={'cpf'}
        ref={refCPF}
        error={state.error?.cpf}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={(text) => handleChangeText('password', text)}
        value={state.password}
        ref={refPassword}
        error={state.error?.password}
        icon={state.showPassword ? 'eye-slash' : 'eye'}
        iconColor={'#4DDBBC'}
        onPress={() =>
          setState({ ...state, showPassword: !state.showPassword })
        }
      />
      <ContainerForgetPassword>
        <Text>Esqueceu a senha?</Text>
      </ContainerForgetPassword>
      <ContainerButtons>
        <Button backgroundColor="#4EBD65" onPress={handleSubmit}>
          <Text fontWeight="semiBold" color="#FFF">
            Entrar
          </Text>
        </Button>
        <Button
          backgroundColor="#0358FF"
          onPress={() => navigation.navigate('Register')}>
          <Text fontWeight="semiBold" color="#FFF">
            Registro
          </Text>
        </Button>
      </ContainerButtons>
    </ContainerTextInputs>
  );
}
