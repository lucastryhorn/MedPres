import { put, takeLatest } from 'redux-saga/effects';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/myPharmacy';
import formatError from '../../../utils/formatError';

function* listMyPharmacyRequest() {
  try {
    const res = yield consumerApi.get('/myfarm/', {
      headers: yield createHeader(),
    });
    console.log(res);
    yield put(Creators.listMyPharmacySuccess(res.data));
  } catch (error) {
    console.log(error.response);
    yield put(
      Creators.listMyPharmacyFailed(formatError(error, error.response?.status)),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.LIST_MY_PHARMACY_REQUEST, listMyPharmacyRequest);
}
