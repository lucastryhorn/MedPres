import { createRef } from 'react';

export const refCPF = createRef();
export const refBirthday = createRef();

export const validators = {
  required: (config, value) => value !== '',
  isValidCPF: () => refCPF.current?.isValid(),
  isValidBirthday: () => refBirthday.current?.isValid(),
};

export const validate = (data, schema) => {
  const messages = {};

  for (let [name, rules] of Object.entries(schema)) {
    for (let rule of rules) {
      if (!validators[rule.type](rule, data[name])) {
        if (!messages.hasOwnProperty(name)) {
          messages[name] = {};
        }
        messages[name] = rule.msg;
      }
    }
  }
  console.log(messages);
  return messages;
};

export const schema = {
  firstName: [{ type: 'required', msg: '* Campo Nome vazio.' }],
  lastName: [{ type: 'required', msg: '* Campo Sobrenome vazio.' }],
  cpf: [
    { type: 'required', msg: '* Campo CPF Vazio.' },
    { type: 'isValidCPF', msg: '* CPF Inválido' },
  ],
  email: [{ type: 'required', msg: '* Campo Email Vazio.' }],
  gender: [{ type: 'required', msg: '* Selecione um Gênero.' }],
  birthday: [
    { type: 'required', msg: '* Campo Data de Nascimento Vazio.' },
    { type: 'isValidBirthday', msg: '* Data de Nascimento Inválida' },
  ],
  password: [{ type: 'required', msg: '* Campo Senha Vazio.' }],
  repeatPassword: [{ type: 'required', msg: '* Campo Repitir a Senha Vazio.' }],
};
