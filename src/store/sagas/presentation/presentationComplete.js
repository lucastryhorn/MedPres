import { put, takeLatest } from 'redux-saga/effects';

import consumerApi, { createHeader } from '../../../services/api';

import { Creators, Types } from '../../reducers/presentation';
import formatError from '../../../utils/formatError';

function* presentationCompleteRequest({ id, isBula }) {
  console.log(id, isBula);
  try {
    const res = yield consumerApi.get(`/apresentacao-completa/${id}`, {
      headers: yield createHeader(),
    });

    if (isBula && !res.data.medicine_id.bula_pacient) {
      yield put(
        Creators.presentationCompleteFailed({
          error: 'Desculpe, não encontramos essa bula',
        }),
      );
    }
    yield put(Creators.presentationCompleteSuccess(res.data));
  } catch (error) {
    console.log(error);
    yield put(
      Creators.presentationCompleteFailed(
        formatError(error, error.response?.status),
      ),
    );
  }
}

export default function* watch() {
  yield takeLatest(
    Types.PRESENTATION_COMPLETE_REQUEST,
    presentationCompleteRequest,
  );
}
