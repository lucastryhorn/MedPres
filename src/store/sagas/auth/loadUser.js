import { put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/auth';
import formatError from '../../../utils/formatError';

function* loadUserRequest() {
  const token = yield AsyncStorage.getItem('token');

  if (!token) {
    return yield put(Creators.loadUserFailed(null));
  }
  console.log(token);
  try {
    const res = yield consumerApi.get('/user/', {
      headers: yield createHeader(),
    });
    yield put(Creators.loadUserSuccess(res.data));
  } catch (error) {
    console.log(error.response);
    yield put(
      Creators.loadUserFailed(formatError(error, error.response?.status)),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.LOAD_USER_REQUEST, loadUserRequest);
}
