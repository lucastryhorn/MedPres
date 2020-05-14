import { all, fork } from 'redux-saga/effects';

import authSagas from './auth';
import registerUserSagas from './registerUser';
import prescriptionsSagas from './prescriptions';
import presentationSagas from './presentation';
import myPharmacySagas from './myPharmacy';

function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(registerUserSagas),
    fork(prescriptionsSagas),
    fork(presentationSagas),
    fork(myPharmacySagas),
  ]);
}

export default rootSaga;
