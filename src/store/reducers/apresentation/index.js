import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  apresentationCompleteRequest: ['data'],
  apresentationCompleteSuccess: ['data'],
  apresentationCompleteFailed: ['error'],
  clearError: ['data'],
});

const INITIAL_STATE = Immutable({
  loading: false,
});

const apresentationCompleteRequest = (state = INITIAL_STATE) =>
  state.set('loading', true);

const apresentationCompleteSuccess = (state = INITIAL_STATE, { data }) =>
  state.merge({
    data,
    loading: false,
  });

const apresentationCompleteFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loading: false });

const clearError = (state = INITIAL_STATE) => state.merge({ error: null });

export default createReducer(INITIAL_STATE, {
  [Types.APRESENTATION_COMPLETE_REQUEST]: apresentationCompleteRequest,
  [Types.APRESENTATION_COMPLETE_SUCCESS]: apresentationCompleteSuccess,
  [Types.APRESENTATION_COMPLETE_FAILED]: apresentationCompleteFailed,
  [Types.CLEAR_ERROR]: clearError,
});
