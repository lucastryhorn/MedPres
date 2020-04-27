import { put, takeLatest } from 'redux-saga/effects';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/apresentation';
import formatError from '../../../utils/formatError';

function* apresentationCompleteRequest({ data }) {
  try {
    const res = yield consumerApi.get(`/apresentacao-completa/${data.id}`, {
      headers: yield createHeader(),
    });
    yield put(Creators.apresentationCompleteSuccess(res.data));
  } catch (error) {
    yield put(
      Creators.apresentationCompleteFailed(
        formatError(error, error.response?.status),
      ),
    );
  }
}

export default function* watch() {
  yield takeLatest(
    Types.APRESENTATION_COMPLETE_REQUEST,
    apresentationCompleteRequest,
  );
}
