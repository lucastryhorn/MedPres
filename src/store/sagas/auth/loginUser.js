import { put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import consumerApi from '../../../services/api';

import { Creators, Types } from '../../reducers/auth';
import formatError from '../../../utils/formatError';

function* loginUserRequest({ data }) {
  try {
    const res = yield consumerApi.post('/login/', { ...data });
    yield AsyncStorage.setItem('token', res.data.token);
    yield put(Creators.loginUserSuccess(res.data));
  } catch (error) {
    yield put(
      Creators.loginUserFailed(formatError(error, error.response?.status)),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.LOGIN_USER_REQUEST, loginUserRequest);
}
