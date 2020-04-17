import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  loadUserRequest: ['data'],
  loadUserSuccess: ['data'],
  loadUserFailed: ['error'],
  loginUserRequest: ['data'],
  loginUserSuccess: ['data'],
  loginUserFailed: ['error'],
  clearErrorAuth: ['error'],
});

const INITIAL_STATE = Immutable({
  loadingSplash: true,
  loading: false,
  authenticated: false,
});

const loadUserRequest = (state = INITIAL_STATE) => state;

const loginUserRequest = (state = INITIAL_STATE) => state.set('loading', true);

const loadUserSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({ data, loadingSplash: false, authenticated: true });

const loginUserSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({ data, loading: false, authenticated: true });

const loadUserFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loadingSplash: false });

const loginUserFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loading: false });

const clearErrorAuth = (state = INITIAL_STATE) => state.set('error', null);

export default createReducer(INITIAL_STATE, {
  [Types.LOAD_USER_REQUEST]: loadUserRequest,
  [Types.LOAD_USER_SUCCESS]: loadUserSuccess,
  [Types.LOAD_USER_FAILED]: loadUserFailed,
  [Types.LOGIN_USER_REQUEST]: loginUserRequest,
  [Types.LOGIN_USER_SUCCESS]: loginUserSuccess,
  [Types.LOGIN_USER_FAILED]: loginUserFailed,
  [Types.CLEAR_ERROR_AUTH]: clearErrorAuth,
});
