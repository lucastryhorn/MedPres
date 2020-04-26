import { all, fork } from 'redux-saga/effects';

import authSagas from './auth';
import registerUserSagas from './registerUser';
import prescriptionsSagas from './prescriptions';

function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(registerUserSagas),
    fork(prescriptionsSagas),
  ]);
}

export default rootSaga;
