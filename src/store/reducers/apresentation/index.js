import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  apresentationCompleteRequest: ['id', 'isBula'],
  apresentationCompleteSuccess: ['data'],
  apresentationCompleteFailed: ['error'],
  clearErrorApresentation: ['error'],
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

const clearErrorApresentation = (state = INITIAL_STATE) =>
  state.merge({ error: null });

export default createReducer(INITIAL_STATE, {
  [Types.APRESENTATION_COMPLETE_REQUEST]: apresentationCompleteRequest,
  [Types.APRESENTATION_COMPLETE_SUCCESS]: apresentationCompleteSuccess,
  [Types.APRESENTATION_COMPLETE_FAILED]: apresentationCompleteFailed,
  [Types.CLEAR_ERROR_APRESENTATION]: clearErrorApresentation,
});
