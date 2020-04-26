import { put, takeLatest } from 'redux-saga/effects';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/prescriptions';
import formatError from '../../../utils/formatError';

function* listPrescriptionsRequest() {
  try {
    const res = yield consumerApi.get('/prescricao/', {
      headers: yield createHeader(),
    });
    yield put(Creators.listPrescriptionsSuccess(res.data));
  } catch (error) {
    yield put(
      Creators.listPrescriptionsFailed(
        formatError(error, error.response?.status),
      ),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.LIST_PRESCRIPTIONS_REQUEST, listPrescriptionsRequest);
}
