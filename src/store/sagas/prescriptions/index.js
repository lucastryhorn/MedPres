import { all, fork } from 'redux-saga/effects';

import listPrescriptionsRequest from './listPrescriptions';

function* prescriptionsSagas() {
  yield all([fork(listPrescriptionsRequest)]);
}

export default prescriptionsSagas;
