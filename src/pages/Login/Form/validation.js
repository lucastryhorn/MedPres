import { createRef } from 'react';

export const refCPF = createRef();

export const validators = {
  required: (config, value) => value !== '',
  isValidCPF: () => refCPF.current?.isValid(),
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
  return messages;
};

export const schema = {
  cpf: [
    { type: 'required', msg: '* Campo CPF Vazio.' },
    { type: 'isValidCPF', msg: '* CPF Inválido' },
  ],
  password: [{ type: 'required', msg: '* Campo Senha Vazio.' }],
};
