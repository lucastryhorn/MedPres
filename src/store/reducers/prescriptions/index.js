import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  listPrescriptionsRequest: ['data'],
  listPrescriptionsSuccess: ['data'],
  listPrescriptionsFailed: ['error'],
  clearErrorPrescriptions: ['error'],
});

const INITIAL_STATE = Immutable({
  loading: false,
});

const listPrescriptionsRequest = (state = INITIAL_STATE) =>
  state.set('loading', true);

const listPrescriptionsSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({
    data,
    loading: false,
  });

const listPrescriptionsFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loading: false });

const clearErrorPrescriptions = (state = INITIAL_STATE) =>
  state.merge({ error: null });

export default createReducer(INITIAL_STATE, {
  [Types.LIST_PRESCRIPTIONS_REQUEST]: listPrescriptionsRequest,
  [Types.LIST_PRESCRIPTIONS_SUCCESS]: listPrescriptionsSuccess,
  [Types.LIST_PRESCRIPTIONS_FAILED]: listPrescriptionsFailed,
  [Types.CLEAR_ERROR_PRESCRIPTIONS]: clearErrorPrescriptions,
});
