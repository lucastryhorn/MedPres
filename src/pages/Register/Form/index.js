import React, { useState, createRef, useEffect } from 'react';
import { TextInput } from '../../../components/TextInput';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import { ViewRow, ViewBirthday } from '../styles';
import PickerModal from '../../../components/Picker';
import { validate, schema, refCPF, refBirthday } from './validation';
import { formatCPF } from '../../../utils/formatCPF';
import { formatDate } from '../../../utils/formatDate';

export default function Form(props) {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    gender: '',
    birthday: '',
    password: '',
    repeatPassword: '',
  });

  const { registerUserRequest } = props;

  const refLastName = createRef();
  const refEmail = createRef();
  const refPassword = createRef();
  const refRepeatPassword = createRef();

  function handleChangeText(name, value) {
    setState({ ...state, [name]: value, error: {} });
  }

  useEffect(() => {
    const { password, repeatPassword } = state;
    if (password && repeatPassword && password !== repeatPassword) {
      setState({ ...state, error: { repeatPassword: '* Senha não confere.' } });
    }
  }, [state.repeatPassword]);

  function handleSubmit() {
    const { firstName, lastName, email, gender, password, birthday } = state;

    if (state.error?.repeatPassword) {
      return;
    }

    const validationMessages = validate(state, schema);

    if (Object.entries(validationMessages).length) {
      return setState({ ...state, error: validationMessages });
    }

    registerUserRequest({
      first_name: firstName,
      last_name: lastName,
      cpf: formatCPF(refCPF.current),
      email,
      gender,
      birthday: formatDate(birthday),
      password,
    });
  }

  return (
    <>
      <TextInput
        placeholder="Nome"
        onChangeText={(text) => handleChangeText('firstName', text)}
        value={state.firstName}
        error={state.error?.firstName}
        autoFocus={true}
        onSubmitEditing={() => refLastName.current.focus()}
      />
      <TextInput
        placeholder="Sobrenome"
        onChangeText={(text) => handleChangeText('lastName', text)}
        value={state.lastName}
        error={state.error?.lastName}
        ref={refLastName}
        onSubmitEditing={() => refCPF.current.getElement().focus()}
      />
      <TextInput
        placeholder="CPF"
        type={'cpf'}
        onChangeText={(text) => handleChangeText('cpf', text)}
        value={state.cpf}
        error={state.error?.cpf}
        ref={refCPF}
        onSubmitEditing={() => refEmail.current.focus()}
      />
      <TextInput
        placeholder="E-mail"
        onChangeText={(text) => handleChangeText('email', text)}
        value={state.email}
        error={state.error?.email}
        keyboardType={'email-address'}
        ref={refEmail}
        onSubmitEditing={() => refBirthday.current.getElement().focus()}
      />
      <ViewRow>
        <PickerModal
          title="Gênero"
          dataPicker={['Gênero', 'Masculino', 'Feminino', 'Intersexo']}
          error={state.error?.gender}
          callback={(selected) => handleChangeText('gender', selected)}
        />
        <ViewBirthday>
          <TextInput
            placeholder="Data de Nascimento"
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            onChangeText={(text) => handleChangeText('birthday', text)}
            value={state.birthday}
            error={state.error?.birthday}
            ref={refBirthday}
            onSubmitEditing={() => refPassword.current.focus()}
          />
        </ViewBirthday>
      </ViewRow>
      <TextInput
        placeholder="Senha"
        onChangeText={(text) => handleChangeText('password', text)}
        value={state.password}
        error={state.error?.password}
        ref={refPassword}
        onSubmitEditing={() => refRepeatPassword.current.focus()}
      />
      <TextInput
        placeholder="Repita sua senha"
        onChangeText={(text) => handleChangeText('repeatPassword', text)}
        value={state.repeatPassword}
        error={state.error?.repeatPassword}
        ref={refRepeatPassword}
        onSubmitEditing={handleSubmit}
      />
      <Button backgroundColor="#0358FF" onPress={handleSubmit}>
        <Text fontWeight="semiBold" color="#FFF">
          Cadastrar
        </Text>
      </Button>
    </>
  );
}
