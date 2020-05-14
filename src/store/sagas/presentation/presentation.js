import { put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/presentation';
import formatError from '../../../utils/formatError';

function* presentationRequest() {
  const presentation = yield AsyncStorage.getItem('presentation');

  if (presentation) {
    return yield put(Creators.presentationSuccess(JSON.parse(presentation)));
  }

  try {
    const res = yield consumerApi.get('/apresentacao/', {
      headers: yield createHeader(),
    });
    yield AsyncStorage.setItem('presentation', JSON.stringify(res.data));
    yield put(Creators.presentationSuccess(res.data));
  } catch (error) {
    console.log(error);
    yield put(
      Creators.presentationFailed(formatError(error, error.response?.status)),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.PRESENTATION_REQUEST, presentationRequest);
}
