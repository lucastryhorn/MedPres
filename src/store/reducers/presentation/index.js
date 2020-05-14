import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  presentationRequest: [''],
  presentationSuccess: ['list'],
  presentationFailed: ['error'],
  presentationCompleteRequest: ['id', 'isBula'],
  presentationCompleteSuccess: ['selectedItem'],
  presentationCompleteFailed: ['error'],
  clearErrorPresentation: ['error'],
});

const INITIAL_STATE = Immutable({
  loading: false,
});

const presentationRequest = (state = INITIAL_STATE) =>
  state.set('loading', true);

const presentationSuccess = (state = INITIAL_STATE, { list }) =>
  state.merge({
    list,
    loading: false,
  });

const presentationFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loading: false });

const presentationCompleteRequest = (state = INITIAL_STATE) =>
  state.set('loading', true);

const presentationCompleteSuccess = (state = INITIAL_STATE, { selectedItem }) =>
  state.merge({
    selectedItem,
    loading: false,
  });

const presentationCompleteFailed = (state = INITIAL_STATE, { error }) =>
  state.merge({ error, loading: false });

const clearErrorPresentation = (state = INITIAL_STATE) =>
  state.merge({ error: null });

export default createReducer(INITIAL_STATE, {
  [Types.PRESENTATION_REQUEST]: presentationRequest,
  [Types.PRESENTATION_SUCCESS]: presentationSuccess,
  [Types.PRESENTATION_FAILED]: presentationFailed,
  [Types.PRESENTATION_COMPLETE_REQUEST]: presentationCompleteRequest,
  [Types.PRESENTATION_COMPLETE_SUCCESS]: presentationCompleteSuccess,
  [Types.PRESENTATION_COMPLETE_FAILED]: presentationCompleteFailed,
  [Types.CLEAR_ERROR_PRESENTATION]: clearErrorPresentation,
});
