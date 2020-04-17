import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  registerUserRequest: ['data'],
  registerUserSuccess: ['data'],
  registerUserFailed: ['error'],
  clearRegister: ['data'],
});

const INITIAL_STATE = Immutable({
  loading: false,
});

const registerUserRequest = (state = INITIAL_STATE) =>
  state.set('loading', true);

const registerUserSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({ data, loading: false, success: true });

const registerUserFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loading: false });

const clearRegister = (state = INITIAL_STATE) => state.merge(INITIAL_STATE);

export default createReducer(INITIAL_STATE, {
  [Types.REGISTER_USER_REQUEST]: registerUserRequest,
  [Types.REGISTER_USER_SUCCESS]: registerUserSuccess,
  [Types.REGISTER_USER_FAILED]: registerUserFailed,
  [Types.CLEAR_REGISTER]: clearRegister,
});
