import { put, takeLatest } from 'redux-saga/effects';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/apresentation';
import formatError from '../../../utils/formatError';

function* apresentationCompleteRequest({ id, isBula }) {
  console.log(id, isBula);
  try {
    const res = yield consumerApi.get(`/apresentacao-completa/${id}`, {
      headers: yield createHeader(),
    });

    if (isBula && !res.data.medicine_id.bula_pacient) {
      yield put(
        Creators.apresentationCompleteFailed({
          error: 'Desculpe, não encontramos essa bula',
        }),
      );
    }
    yield put(Creators.apresentationCompleteSuccess(res.data));
  } catch (error) {
    console.log(error);
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
