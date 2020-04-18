import { put, takeLatest } from 'redux-saga/effects';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/register';
import formatError from '../../../utils/formatError';

function* registerUserRequest({ data }) {
  try {
    const res = yield consumerApi.post(
      '/complete_register/',
      { ...data },
      {
        headers: yield createHeader(),
      },
    );
    yield put(Creators.registerUserSuccess(res.data));
    console.log(res);
  } catch (error) {
    console.log(error.response);
    yield put(
      Creators.registerUserFailed(formatError(error, error.response?.status)),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.REGISTER_USER_REQUEST, registerUserRequest);
}
