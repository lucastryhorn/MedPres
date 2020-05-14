import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  listMyPharmacyRequest: [''],
  listMyPharmacySuccess: ['data'],
  listMyPharmacyFailed: ['error'],
  clearErrorMyPharmacy: ['error'],
});

const INITIAL_STATE = Immutable({
  loading: false,
});

const listMyPharmacyRequest = (state = INITIAL_STATE) =>
  state.set('loading', true);

const listMyPharmacySuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({
    data,
    loading: false,
  });

const listMyPharmacyFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loading: false });

const clearErrorMyPharmacy = (state = INITIAL_STATE) =>
  state.merge({ error: null });

export default createReducer(INITIAL_STATE, {
  [Types.LIST_MY_PHARMACY_REQUEST]: listMyPharmacyRequest,
  [Types.LIST_MY_PHARMACY_SUCCESS]: listMyPharmacySuccess,
  [Types.LIST_MY_PHARMACY_FAILED]: listMyPharmacyFailed,
  [Types.CLEAR_ERROR_MY_PHARMACY]: clearErrorMyPharmacy,
});
