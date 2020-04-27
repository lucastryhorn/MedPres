import { all, fork } from 'redux-saga/effects';

import authSagas from './auth';
import registerUserSagas from './registerUser';
import prescriptionsSagas from './prescriptions';
import apresentationSagas from './apresentation';

function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(registerUserSagas),
    fork(prescriptionsSagas),
    fork(apresentationSagas),
  ]);
}

export default rootSaga;
